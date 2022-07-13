import React from "react";
import { View,Text,StatusBar,Image,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./SwitchSpace.Style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";
const SwitchSpace=()=>{
    const data=[
        {id:1,title:'Design',conent:'420 Members Joinend'},
        {id:2,title:'Photography',conent:'2 Notification - 420 Members Joinend'},
        {id:3,title:'Animation',conent:'420 Members Joinend'},
        {id:4,title:'Products',conent:'2 Notification - 420 Members Joinend'},
        {id:5,title:'Development',conent:'420 Members Joinend'},
        {id:6,title:'Operation',conent:' 99 Notification - 420 Members Joinend'},
        {id:7,title:'Marketing',conent:'420 Members Joinend'},
        {id:8,title:'Design',conent:'420 Members Joinend'},
        {id:9,title:'Design',conent:'420 Members Joinend'},
        {id:10,title:'Sale',conent:'420 Members Joinend'},
    ]
    return(
        <>
            <SafeAreaView style={style.main}>
                <StatusBar  barStyle={'dark-content'}/>
                <View style={style.HeaderView}>
                    <View style={[style.Headersub,{backgroundColor:'black'}]}>
                        <Ionicons name="chevron-back" color={'white'} size={responsiveWidth(4)}/>
                    </View>
                    <View style={style.Headersub1}>
                        <Text>You joined 8 spaces</Text>
                    </View>
                    <View style={[style.Headersub,{backgroundColor:'#0002FC'}]}>
                        <Entypo name="plus" color={'white'} size={responsiveWidth(4)}/>
                    </View>
                </View>
                <View style={style.contentView}>
                    <View style={{flex:1}}>
                        <Text style={style.contentViewText}>Switch Space</Text>
                    </View>
                    <View style={{flex:12}}>
                        <FlatList
                            data={data}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item})=>{
                                return(
                                    <>
                                        <View style={style.cardView}>
                                            <View style={style.cardsubView}>
                                                <Image source={require('../../Assets/pictures/Avatar2.png')}/>
                                                <View style={{marginLeft:responsiveWidth(5),width:responsiveWidth(60)}}>
                                                    <Text style={style.cardText1}>{item.title}</Text> 
                                                    <Text style={style.cardText2}>{item.conent}</Text> 
                                                </View>
                                            </View>
                                            <View style={style.cardsubView2}>
                                            <Ionicons name="checkmark-sharp" color={'white'} size={responsiveWidth(4)}/>
                                        </View>
                                    </View>
                                    </>
                                )
                            }}
                        />
                       
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
export default SwitchSpace;