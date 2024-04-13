import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import ArtworkListDetails from "../common/shareableComponents/ArtworkListDetails";


const FavoriteList: React.FC = () => {
    const [artworkFavorites, setArtworkFavorites] = useState<string[]>([]);

    
    const renderItem = ({item}: {item: any}) => {
        return (
            <ArtworkListDetails item={item}/>
        )
    }
    
    useFocusEffect(
        React.useCallback(()=>{
            const loadFavorites = async () => {
                try {
                    const favs = await AsyncStorage.getItem("favorites");
                    if (favs) {
                        const favsData = JSON.parse(favs);
                        setArtworkFavorites(favsData);
                    }
                } catch (error) {
                    console.log("error loading",error);
                }
            };
            loadFavorites();
        },[])
    )
    
    return ( 
        <>
            {
                artworkFavorites.length == 0 ?
                <View style={{flex: 1, justifyContent: "center",marginHorizontal: 10}}>
                <Text style={{fontWeight: "bold",fontSize:20,textAlign: "center",paddingBottom:10,color:"#E6999E"}}>At the moment you don't have favorite artworks, you can add them by seeing the details of each one!</Text>
                </View>
                : 
                <FlatList
                style={{flex: 1,backgroundColor:"#E6999E",paddingBottom: 100}}
                data={artworkFavorites}
                renderItem={renderItem}
                keyExtractor={(item,index) => index.toString()}
                />
            }
        </>
    )
}

export default FavoriteList;