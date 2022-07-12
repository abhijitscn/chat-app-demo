import React from 'react';
import { View,Text ,SafeAreaView,ImageBackground,StatusBar,StyleSheet,Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'


const Home=()=>{
    return(
        <>
            <SafeAreaView style={style.main}>
                <ImageBackground style={style.sub} source={require('../../Assets/pictures/Image.png')}>
                    <StatusBar translucent backgroundColor='transparent'/>
                    <View style={style.view1}>
                        <View style={style.view1Sub1}>
                            <Image source={require('../../Assets/pictures/Avatar.png')} />
                            <Text style={style.buttonText}>Switch Space</Text>
                            <AntDesign name='swap' color={'white'} size={20} style={{margin:10}}/>
                        </View>
                        <View style={style.view1Sub2}>
                            <Entypo name='forward' color={'white'} size={15}/>
                        </View>
                    </View>
                    <View style={style.view2}>

                    </View>
                    <View style={style.view3}>

                    </View>
                </ImageBackground>
                
            </SafeAreaView>
        </>
    )
}
const style=StyleSheet.create({
    main:{
        flex:1
    },
    sub:{
        flex:1,
    },
    view1:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20
    },
    view1Sub1:{
        width:'55%',
        height:41,
        backgroundColor:'#0002FC',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    view1Sub2:{
        height:40,
        width:40,
        borderRadius:20,
        borderWidth:2,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white'
    },
    view2:{
        flex:1,
        backgroundColor:'red'
    },
    view3:{
        flex:2,
        backgroundColor:'aqua'
    },
    text:{
        color:'red'
    }
});
export default Home;
