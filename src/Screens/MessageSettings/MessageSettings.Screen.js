import React,{useState} from "react";
import { View,Text,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Style from "./MessageSettings.Style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth,responsiveHeight } from "../../Utils/Dimension";
import { Divider,Switch} from "@rneui/base";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MessageSettings=({navigation})=>{
    const [butt,setButt]=useState({systemNoti:false,newMessNoti:true});
    return(
        <>
        <SafeAreaView style={Style.main}>
            <View style={Style.HeaderView}>
                <Pressable style={[Style.butView,{backgroundColor:'black'}]} onPress={()=>{navigation.goBack()}}>
                    <Ionicons name="chevron-back-outline" color='white' size={responsiveWidth(4.5)}/>
                </Pressable>
                <Text style={[Style.text3,]}>My Groups</Text>
                <View style={{marginLeft:responsiveWidth(12)}}></View> 
            </View>
            <View style={Style.contentView}>
                
                <View style={Style.listCardView}>
                    <Text style={Style.text3}>System Notification</Text>
                    <Switch value={butt.systemNoti} color='#02C697' onChange={()=>setButt({...butt,systemNoti:!butt.systemNoti})}/>
                </View>
                <Divider color="#8F92A1"/>
                <View style={Style.listCardView}>
                    <Text style={Style.text3}>Notification of New Messages</Text>
                    <Switch value={butt.newMessNoti} color='#02C697' onChange={()=>setButt({...butt,newMessNoti:!butt.newMessNoti})}/>
                </View>
                <Divider color="#8F92A1"/>
                <View style={Style.listCardView}>
                    <Text style={Style.text3}>Blocked List</Text>
                    <MaterialIcons name="arrow-forward-ios" color='black' size={responsiveWidth(4.5)}/>
                </View>
            </View>
          

        </SafeAreaView>
        
        </>
    )
}
export default MessageSettings;