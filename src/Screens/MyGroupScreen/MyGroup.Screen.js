import React from "react";
import {View,Text,StatusBar,FlatList,Image,Pressable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./MyGroup.Style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";

const MyGroupScreen=({navigation})=>{
    const Data=[
        {id:1,title:'Group name 001',Pno:30,isSilent:true},
        {id:2,title:'Group name 001',Pno:30,isSilent:false},
        {id:3,title:'Group name 001',Pno:30,isSilent:true},
        {id:4,title:'Group name 001',Pno:30,isSilent:false},
        {id:5,title:'Group name 001',Pno:30,isSilent:false},
        {id:6,title:'Group name 001',Pno:30,isSilent:false},
        {id:7,title:'Group name 001',Pno:30,isSilent:false},
        {id:8,title:'Group name 001',Pno:30,isSilent:true},
        {id:10,title:'Group name 001',Pno:30,isSilent:false},
    ]
    return(
        <>
        <SafeAreaView style={style.main}>
        <StatusBar  barStyle={'dark-content'}/>
            <View style={style.Headerview}>
                <View style={style.headerSub1}>
                    <Pressable style={[style.butView,{backgroundColor:'black'}]} onPress={()=>{navigation.goBack()}}>
                        <Ionicons name="chevron-back-outline" color='white' size={responsiveWidth(4.5)}/>
                    </Pressable>
                    <Text style={style.text3}>My Groups</Text>
                    <View style={[style.butView,{backgroundColor:'#0002FC'}]}>
                        <Ionicons name="chatbox-ellipses-outline" color='white' size={responsiveWidth(4.5)}/>
                    </View>
                </View>
                <View style={style.headerSub2}>
                    <View style={style.serachButView}>
                        <EvilIcons name="search" color='#8F92A1' size={responsiveWidth(4.5)}/>
                        <Text>Search</Text>
                    </View>
                </View>
            </View>
            <View style={style.GroupView}>
                <FlatList
                    data={Data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>{
                        return(
                            <>
                            <View style={style.groupCard}>
                                <View style={style.gCardSub}>
                                    <Image source={require('../../Assets/pictures/Avatar5.png')}/>
                                    <View style={style.gCardText}>
                                        <Text style={style.text1}>{item.title}</Text>
                                        <Text style={style.text2}>{item.Pno} of people</Text>
                                    </View>
                                </View>
                                {item.isSilent?
                                <MaterialCommunityIcons name="bell-off-outline" color='black' size={responsiveWidth(4)} style={{alignSelf:'center'}}/>
                                :null}
                            </View> 
                            </>
                        )
                    }}
                />
                
            </View>

        </SafeAreaView>
        </>
    )
}
export default MyGroupScreen;