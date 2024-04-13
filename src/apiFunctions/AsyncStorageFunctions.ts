import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToFavorites = async (artwork: any ,setIsFavorite: any,toast: any) => {
    try {
        const favoritesString = await AsyncStorage.getItem('favorites');
        let favorites: any[] = [];
        if (favoritesString) {
            favorites = JSON.parse(favoritesString);
        }
        if (!favorites.find((fav: any) => fav.id === artwork.id)) {
            favorites.push(artwork);
            await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
        toast.show("Artwork added to favorites successfully!", {
            type: "success",
            placement: "top",
            duration: 2000,
            animationType: "zoom-in",
          });
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
};
    
export const removeFromFavorites = async (artwork: any,setIsFavorite: any,toast:any) => {
        try {
            const favoritesString = await AsyncStorage.getItem('favorites');
            if (favoritesString) {
            let favorites: any[] = JSON.parse(favoritesString);
            favorites = favorites.filter((fav: any) => fav.id !== artwork.id);
            await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(false);
            toast.show("Artwork removed to favorites successfully!", {
                type: "danger",
                placement: "top",
                duration: 2000,
                animationType: "zoom-in",
              });
            }
        } catch (error) {
            console.error('Error removing from favorites:', error);
        }
};

export const checkIfFavorite = async (artwork: any,setIsFavorite: any) => {
    try {
      const favoritesString = await AsyncStorage.getItem('favorites');
      if (favoritesString) {
        const favorites: any[] = JSON.parse(favoritesString);
        const isFav = favorites.some((fav: any) => fav.id === artwork.id);
        setIsFavorite(isFav);
      }
    } catch (error) {
      console.error('Error checking favorites:', error);
    }
  };