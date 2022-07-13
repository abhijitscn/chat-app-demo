import React from 'react';
import { View,Text ,SafeAreaView,ImageBackground,StatusBar,Image,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import style from './Home.Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveHeight,responsiveWidth } from '../../Utils/Dimension';
const Home=({ navigation })=>{
    const cardData=[
        {id:1, name:'About Us',color:'black',name1:'menu'},
        {id:2, name:'Course',color:'blue',name1:'book-open-blank-variant'},
        {id:3, name:'Share Space',color:'#FFDB47',name1:'forward'},
        {id:4, name:'Live Stream',color:'#02C697',name1:'instagram'},
    ]
    return(
        <>
            <SafeAreaView style={style.main}>
                <ImageBackground style={style.sub} source={require('../../Assets/pictures/Image.png')}>
                    <StatusBar translucent backgroundColor='transparent'/>
                    <View style={style.view1}>
                        <Pressable style={style.view1Sub1} onPress={()=>{navigation.navigate('SwitchSpace')}}>
                            <Image source={require('../../Assets/pictures/Avatar.png')} />
                            <Text style={style.buttonText}>Switch Space</Text>
                            <AntDesign name='swap' color={'white'} size={20} style={{margin:10}}/>
                        </Pressable>
                        <View style={style.view1Sub2}>
                            <Entypo name='forward' color={'white'} size={15}/>
                        </View>
                    </View>
                    <View style={style.view2}>
                        <Text style={style.view2Text1}>
                            Design Space
                        </Text>
                        <Text style={style.view2Text2}>
                            204 LiveStreams.53 Course.7301Members Joined
                        </Text>
                    </View>
                    <View style={style.view3}>
                            {cardData.map((data)=>(
                                <View style={style.cardView} key={data.id} >
                                    <MaterialCommunityIcons name={data.name1} color={data.color} size={responsiveWidth(5)}/>
                                    <Text style={style.cardText}>{data.name}</Text>
                                </View>
                            ))}
                            
                        
                    </View>
                </ImageBackground>
                
            </SafeAreaView>
        </>
    )
}

export default Home;
