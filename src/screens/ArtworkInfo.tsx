import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated";
import ArtworkInfoShareable from "../common/shareableComponents/ArtworkInfoShareable";


const ArtworkInfo: React.FC= ({route}: any) => {

    const { artwork } = route.params;

    return ( 
        <ScrollView style={{backgroundColor: "#E6999E"}}>
            <View style={{alignItems: "center"}}>
             <ArtworkInfoShareable artwork={artwork}/>
            </View>
        </ScrollView>
    )
}

export default ArtworkInfo;