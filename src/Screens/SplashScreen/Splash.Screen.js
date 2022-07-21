import React,{useEffect} from "react";
import { Text,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Splash.Style";

const SplashScreen=({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('mainTab');
            console.log('triggered')
        },5000)

    },[])
    return(
        <>
            <SafeAreaView style={style.main}>
                <Image source={require('../../Assets/pictures/icon-book.png')} style={style.picture}/>
            </SafeAreaView>
        </>
    )
}
export default SplashScreen;