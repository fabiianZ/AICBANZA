import { Text, View, Image, Button } from "react-native"
import React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { clean } from "../redux/AppActions";
import styles from '../common/styles/styles';

const HomeScreen: React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(clean());
        }, [dispatch])
    )

    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.welcomeInnerContainer}>
                <Image 
                    source={require("../common/imgs/aic.png")}
                    resizeMode="contain"
                    style={styles.welcomeImage}
                />
                <Text style={styles.welcomeText}>
                Welcome to the Chicago Art Institute app
                </Text>
            </View>
            <View style={styles.loginButtonContainer}>
                <Button onPress={() => navigation.navigate("TabList")} title="Login" color={"#AD1F29"}>
                </Button>
            </View>
        </View>
    )
}
export default HomeScreen;