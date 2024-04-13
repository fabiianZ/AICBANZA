import { CardStyleInterpolators, createStackNavigator,TransitionPreset } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import MainScreen from "../screens/ArtworkList";
import FavoriteList from "../screens/FavoriteList";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar,faHome } from "@fortawesome/free-solid-svg-icons";
import { Text, View } from "react-native";
import ArtworkInfo from "../screens/ArtworkInfo";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const ApplicationTabs: React.FC = () => {

    return ( 
        <Tab.Navigator>
            <Tab.Screen 
                name="PrincipalList"
                component={MainScreen}
                options={{
                    headerTitle: ()=> (
                        <View style={{flex: 1,alignItems: "center",justifyContent: "center"}}>
                            <Text style={{color: "white",fontSize: 18,fontWeight: "bold"}}>Artwork´s list</Text>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: "#AD1F29"
                    },
                    tabBarIcon: ({ color, size}: any) => <FontAwesomeIcon icon={faHome}  size={size} color={"#AD1F29"} />,
                    tabBarLabelStyle: {color:"#AD1F29"},
                    tabBarActiveBackgroundColor: "#E6999E",
                    tabBarActiveTintColor: "black",
                }}
            />
            <Tab.Screen 
              name="FavoriteList"
              component={FavoriteList}
              options={{
                headerTitle: ()=> (
                    <View style={{flex: 1,alignItems: "center",justifyContent: "center"}}>
                        <Text style={{color: "white",fontSize: 18,fontWeight: "bold"}}>Artwork´s Favorite list</Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: "#AD1F29"
                },
                tabBarIcon: ({color, size}: any) => <FontAwesomeIcon icon={faStar} size={size} color={"#AD1F29"} />,
                tabBarLabelStyle: {color:"#AD1F29"},
                tabBarActiveBackgroundColor: "#E6999E",
                }}
            />
        </Tab.Navigator>
    )
}

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{gestureEnabled: true,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name="TabList"
                    component={ApplicationTabs}
                    options={{
                      headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ArtworkInfo"
                    component={ArtworkInfo}
                    options={({route}) => ({
                        headerTitle: ()=> (
                            <View style={{flex: 1,alignItems: "center",justifyContent: "center"}}>
                                <Text style={{color: "white",fontSize: 18,fontWeight: "bold"}}>{(route.params as any).artwork.title.length > 30 ? (route.params as any).artwork.title.slice(0,30)+"..." : (route.params as any).artwork.title || "Detalles de la obra"}</Text>
                            </View>
                        ),
                        headerStyle: {
                            backgroundColor: "#AD1F29"
                        },
                        
                    })}
                />
            </Stack.Navigator>    
        </NavigationContainer>
    )
}

export default AppNavigator;