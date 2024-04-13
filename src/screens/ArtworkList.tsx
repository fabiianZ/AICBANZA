import ArtworkListDetails from "../common/shareableComponents/ArtworkListDetails";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchArtworkList } from "../redux/AppSideEffects";
import { ThunkDispatch } from "@reduxjs/toolkit";
import styles from "../common/styles/styles";

const MainScreen: React.FC = () => {

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const artworkListData = useSelector((state: any) => state.appReducer.artworkList);
    const [pageNumber, setPageNumber] = useState(1);

    
    const renderItem = ({item}: {item: any}) => {
        return (
            <ArtworkListDetails item={item}/>
        )
    }
    
    const callData = () => {
        setPageNumber(pageNumber+1)
    }

    useEffect(() => {
        dispatch(fetchArtworkList(pageNumber));             
    }, [dispatch,pageNumber])
    
    return ( 
    <>
        {
        artworkListData.length == 0 ? 
        <View style={styles.artworkListLoadingContainer}>
            <Text style={styles.artworkListLoadingMessage}>Loading Artwork´s</Text>
            <ActivityIndicator size="large" color={"#E6999E"}/>
        </View>
        :
        <FlatList
            style={styles.flatListContainer}
            data={artworkListData}
            renderItem={renderItem}
            keyExtractor={(item,index) => index.toString()}
            onEndReachedThreshold={0.9}
            onEndReached={callData}
        />
        }
    </>
    )
}

export default MainScreen;