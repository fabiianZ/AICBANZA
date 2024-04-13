import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';
import { checkIfFavorite } from '../../apiFunctions/AsyncStorageFunctions';
import HeartRedSvg from '../imgs/svgHeartRed';

interface ArtworkListDetailsProps {
    item: any;
}

const ArtworkListDetails: React.FC<ArtworkListDetailsProps> = ({ item }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();
    const descriptiveText = "This painting captures the essence of its subject with a blend of colors and shapes that invite reflection. It evokes a variety of emotions through its unique composition and style, inviting viewers to interpret it in different ways. As a visual representation, it challenges conventions and stimulates the viewer's mind, celebrating the creativity and diversity of the human experience.";

    const goToArtworkInfo = (artwork: any) => {
        navigation.navigate('ArtworkInfo', { artwork });
    };
  
     useFocusEffect(
        React.useCallback(()=>{
            checkIfFavorite(item, setIsFavorite);
        },[])
    )
    
    return (
        <TouchableOpacity
            onPress={() => goToArtworkInfo(item)}
            style={styles.flatListStyle}>
            <Text style={styles.flatListTitle}>
                {item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}
            </Text>
            <View style={styles.flatListImageContainerDetails}>
                <View style={{ marginRight: 10}}>
                    {item.image_id != null ? (
                        <Image
                            source={{
                                uri: 'https://www.artic.edu/iiif/2/' + item.image_id + '/full/843,/0/default.jpg',
                            }}
                            style={styles.flatListImageDetails}
                            resizeMode="cover"
                        />
                    ) : (
                        <Image
                            source={require('../../common/imgs/aic.png')}
                            style={styles.flatListImageDetails}
                            resizeMode="cover"
                        />
                    )}

                </View>
                <Text style={styles.flatListDescriptiveText}>
                    {item.description != null ? item?.description.replace(/<\/?p>/g, '').slice(0, 150) + '...' : descriptiveText.slice(0,150)}
                </Text>
            </View>
            <View style={{width: 15, height: 15, position: "absolute", bottom: 3,right: 5}}>
                {isFavorite && <HeartRedSvg />}
            </View> 
        </TouchableOpacity>
    );
};

export default ArtworkListDetails;
