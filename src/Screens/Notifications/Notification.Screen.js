import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,Image, Pressable,FlatList } from "react-native";
import style from "./Notification.Style";
import { responsiveWidth } from "../../Utils/Dimension";

const NotificationScreen=()=>{
    const data=[
        {id:1,image:true,title:"Schedule reminder: morning service on campus will begin at 7:00 AM! Come on, we'll wait for you! aaaaaaaaaaaaa a",type:'noti',time:'7:00 AM - 8:00 AM'},
        {id:2,image:false,title:"Schedule reminder: The Mount Hermon Bible Study will begin in 10 minutes, everyone Don't be late!",type:'noti',time:'6:00 AM - 7:00 AM'},
        {id:3,image:false,title:"Livia aaaaaaaaaaaaaaaaaaaaa a",type:'live',time:'Livia has invited you to join the Zion Church'},
        {id:4,image:false,title:"Livia",type:'fReqst',time:'Livia sent you a friend request.'},      
    ]
    return(
        <>
            <SafeAreaView style={style.main}>
                <View style={style.HeaderView}>
                    <Text style={style.HeaderText1}>Notifications</Text>
                    <Text style={style.HeaderText2}>Edit</Text>
                </View>
                <View style={style.contentView}>
                    <FlatList
                        data={data}
                        renderItem={({item})=>{
                            return(
                                <>
                                     <View style={style.notCardView}>
                                        <View style={{flex:5}}>
                                            <Text style={style.notText1}>{item.title}</Text>
                                            <Text style={style.notText2}>{item.time}</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            {item.type==='live'?
                                            
                                            <Pressable style={style.butView}>
                                                <Text style={style.butText}>View</Text>
                                            </Pressable>:
                                            (item.type==='fReqst')?
                                            <Pressable style={style.butView}>
                                                <Text style={style.butText}>Agree</Text>
                                            </Pressable>:
                                            
                                            item.image?
                                            <Image source={require('../../Assets/pictures/notImg.png')} />:null
                                            }
                                        </View>
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
export default NotificationScreen;