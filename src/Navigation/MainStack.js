import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen/Splash.Screen";
import MainNavigator from "./MainRouter";
import { NavigationContainer } from "@react-navigation/native";
const Stack=createNativeStackNavigator();

const MainStack=()=>{
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="main" component={SplashScreen}/>
                <Stack.Screen name="mainTab" component={MainNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}
export default MainStack;