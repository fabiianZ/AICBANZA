import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HeartEmptySvg from '../imgs/svgHeartEmpty';
import HeartRedSvg from '../imgs/svgHeartRed';
import styles from '../styles/styles';
import {
  addToFavorites,
  checkIfFavorite,
  removeFromFavorites,
} from '../../apiFunctions/AsyncStorageFunctions';
import {useToast} from 'react-native-toast-notifications';

interface ArtworkInfoShareableProps {
  artwork: any;
}

const ArtworkInfoShareable: React.FC<ArtworkInfoShareableProps> = ({
  artwork,
}) => {
  const [showDescription, setShowDescription] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [artworkFavorites, setArtworkFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const toast = useToast();
  const descriptiveText = "This painting captures the essence of its subject with a blend of colors and shapes that invite reflection. It evokes a variety of emotions through its unique composition and style, inviting viewers to interpret it in different ways. As a visual representation, it challenges conventions and stimulates the viewer's mind, celebrating the creativity and diversity of the human experience.";

  useEffect(() => {
    checkIfFavorite(artwork, setIsFavorite);
  }, [artworkFavorites]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{artwork?.title}</Text>
      <View style={styles.imageContainer}>
        <View style={{width: '100%'}}>
          {artwork?.image_id != null  ? (
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.artic.edu/iiif/2/' +
                  artwork.image_id +
                  '/full/843,/0/default.jpg',
              }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={styles.image}
              source={require('../../common/imgs/aic.png')}
              resizeMode="contain"
            />
          )}
          <View style={styles.favoritesButton}>
            <TouchableOpacity
              onPress={() => {
                if (isFavorite) {
                  removeFromFavorites(artwork, setIsFavorite, toast);
                } else {
                  addToFavorites(artwork, setIsFavorite, toast);
                }
              }}>
              <View style={{width: 25, height: 25}}>
                {isFavorite ? <HeartRedSvg /> : <HeartEmptySvg />}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{width: '98%'}}>
        <TouchableOpacity
          style={styles.descriptionHeader}
          onPress={() => setShowDescription(!showDescription)}>
          <Text
            style={{
              marginRight: 10,
              fontSize: 24,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Description
          </Text>
          <Text>
            {showDescription ? (
              <FontAwesomeIcon icon={faArrowUp} size={16} color="black" />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} size={16} color="black" />
            )}
          </Text>
        </TouchableOpacity>
      </View>
      {showDescription && (
        <View style={{width: '98%'}}>
          <Text style={styles.descriptionText}>
            {artwork.description != null
              ? artwork?.description.replace(/<\/?p>/g, '')
              : descriptiveText}
          </Text>
        </View>
      )}
      <View style={{width: '98%'}}>
        <TouchableOpacity
          style={styles.descriptionHeader}
          onPress={() => setShowDetails(!showDetails)}>
          <Text
            style={{
              marginRight: 10,
              fontSize: 24,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Details
          </Text>
          <Text>
            {showDetails ? (
              <FontAwesomeIcon icon={faArrowUp} size={16} color="black" />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} size={16} color="black" />
            )}
          </Text>
        </TouchableOpacity>
      </View>
      {showDetails && (
        <View style={{ width: '98%' }}>
        {artwork.date_display != "" && (
          <Text style={styles.descriptionText}>
            <Text style={styles.textBold}>Date of Creation:</Text> {artwork.date_display}
          </Text>
        )}
        {artwork.artist_display != "" && (
          <Text style={styles.descriptionText}>
            <Text style={styles.textBold}>Artist:</Text> {artwork.artist_display}
          </Text>
        )}
        {artwork.place_of_origin != "" && (
          <Text style={styles.descriptionText}>
            <Text style={styles.textBold}>Place of Origin:</Text> {artwork.place_of_origin}
          </Text>
        )}
        {artwork.technique_titles != "" && (
          <Text style={styles.descriptionText}>
            <Text style={styles.textBold}>Technique:</Text> {artwork.technique_titles}
          </Text>
        )}
        {artwork.dimensions != "" && (
          <Text style={styles.descriptionText}>
            <Text style={styles.textBold}>Dimensions:</Text> {artwork.dimensions}
          </Text>
        )}
        {artwork.credit_line != "" && (
          <Text style={styles.descriptionText}>
            <Text style={styles.textBold}>Credit Line:</Text> {artwork.credit_line}
          </Text>
        )}
      </View>
      )}
    </View>
  );
};

export default ArtworkInfoShareable;
