import React,{useState} from "react";
import { View,Text,StatusBar ,Image,FlatList,Modal,Pressable,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth } from "../../Utils/Dimension";
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PushNotification from "react-native-push-notification";
import { ListItem ,Button} from "@rneui/themed";
import style from "./Chat.Style";
const ChatScreen=({navigation})=>{
    const [modal,setModal]=useState(false);
    const Data=[
        {id:1,name:'Mark French',message:'said may not chance,but do not', time:'16:04',pending:0},
        {id:2,name:'Mark Lora',message:'said may not chance,but do not', time:'16:04',pending:99},
        {id:3,name:'Emmy Chore',message:'said may not chance,but do not', time:'16:04',pending:46},
        {id:4,name:'Myke Pompe',message:'said may not chance,but do not', time:'16:04',pending:2},
        {id:5,name:'Gorge Brush',message:'said may not chance,but do not', time:'16:04',pending:0},
        {id:6,name:'Harle Watson',message:'You are so sweet.', time:'16:04',pending:5},
        {id:7,name:'kamala Chope',message:'Work happily in my home', time:'16:04',pending:0},
        {id:8,name:'Gorge Brush',message:'said may not chance,but do not', time:'16:04',pending:0},
        {id:9,name:'Harle Watson',message:'You are so sweet.', time:'16:04',pending:5},
        {id:10,name:'kamala Chope',message:'Work happily in my home', time:'16:04',pending:0},
    ]
    const [data1,setData1]=useState(Data);
    const handleNotification=(item)=>{
        // PushNotification.clearAllNotifications();
        PushNotification.localNotification({
            channelId:'demo',
            title:'Chat',
            message:'you started chat with '+item.name,
            picture: "https://myicons.co/myicons-social-icons"
        });

        // PushNotification.localNotificationSchedule({
        //     channelId:'demo',
        //     title:'scheduled notification',
        //     message:'you started chat with '+item.name,
        //     date: new Date(Date.now() + 40 * 1000),

        // })

    };
     function deletechat(id,fun){
        let data=[...data1];
        let filterdata=data.filter((res)=>{
            return res.id!==id
        });
        setData1(filterdata)
        fun();
    };
    const goToSettings=()=>{
        setModal(false);
        navigation.navigate('mSettings')
    }
    return(
        <>
           
            <SafeAreaView style={style.main}>
            <StatusBar  barStyle={'dark-content'} backgroundColor='transparent'/>
                <View style={style.Headerview}>
                    <View style={style.HeaderViewsub1}>
                        <Text style={style.HeaderText1}>Chats</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={style.seachView}>
                                <Fontisto name="search" color='black' size={responsiveWidth(4)}/>
                            </View>
                            <Pressable style={style.seachView} onPress={()=>{navigation.navigate('contact')}}>
                                <FontAwesome name="address-book-o" color='black' size={responsiveWidth(4)}/>
                            </Pressable>
                            <Pressable style={[style.seachView,{backgroundColor:'#0002FC'}]} onPress={()=>{setModal(!modal)}}>
                                <Fontisto name="plus-a" color='white' size={responsiveWidth(4)}/>
                            </Pressable>
                        </View>
                    </View>
                    <View style={style.HeaderViewSub2}>
                        <Pressable style={style.HeaderCard} onPress={()=>{navigation.navigate('notification')}}>
                            <View style={[style.seachView,{backgroundColor:'black'}]}>
                                <MaterialCommunityIcons name="bell-outline" color='white' size={responsiveWidth(5)}/>
                            </View>
                            <Text style={style.notText2}>Notifs</Text>
                            <View style={style.notView}>
                                <Text style={style.notText}>99</Text>
                            </View>
                        </Pressable>
                        <Pressable style={style.HeaderCard} onPress={()=>{navigation.navigate('MyGroup')}}>
                            <View style={[style.seachView,{backgroundColor:'#FFDB47',borderColor:'#FFDB47'}]}>
                                <Feather name="users" color='black' size={responsiveWidth(4)}/>
                            </View>
                            <Text style={style.notText2}>My groups</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={style.chatView}>
                    <FlatList
                    data={data1}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>{
                        return(
                            <>
                            <ListItem.Swipeable
                            style={{backgroundColor:'red'}}
                             rightContent={(reset) => {
                                return(
                                    <>
                                    <View style={{minHeight: '100%',flexDirection:'row'}}>
                                        <TouchableOpacity style={{backgroundColor:'#8F92A1',flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <MaterialCommunityIcons name="email-newsletter" color={'white'} size={responsiveWidth(5)} />
                                            <Text style={{fontSize:responsiveWidth(3),color:'white',fontWeight:'600',textAlign:'center'}}>Mark as unread</Text>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity style={{backgroundColor:'red',flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=>{deletechat(item.id,reset)}}>
                                            <AntDesign name="delete" color={'white'} size={responsiveWidth(5)} />
                                            <Text style={{fontSize:responsiveWidth(3),color:'white',fontWeight:'600',textAlign:'center'}}>Delete</Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                </>
                            )}}
                            >
                             <Pressable style={style.chatCard} onPress={()=>handleNotification(item)}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('../../Assets/pictures/Avatar2.png')} style={{alignSelf:'center'}}/>
                                    <View style={style.chatCardsub}>
                                        <Text style={style.chatCardtext1}>{item.name}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            {item.pending>0?
                                            <Text style={style.chatCardtext2}>[{item.pending} Messages] </Text>
                                            :null}
                                            <Text style={style.chatCardtext2}>{item.message}</Text>
                                        </View> 
                                    </View>
                                </View>
                                <Text style={style.timeText}>{item.time}</Text>
                            </Pressable> 
                            </ListItem.Swipeable>
                            </>
                        )
                    }}
                    />
                    
                </View>
            </SafeAreaView>
            <Modal
                visible={modal}
                transparent={true}
                onRequestClose={()=>{
                    setModal(!modal)
                }}>
                    <View style={style.mainModalView}>
                        <View style={style.modalView}>
                            <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
                                <Entypo name="chat" size={responsiveWidth(4)} color='black' style={{marginRight:responsiveWidth(3)}}/>
                                <Text>Create Group</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
                                <Feather name="user-plus" size={responsiveWidth(4)} style={{marginRight:responsiveWidth(3)}} color='black'/>
                                <Text>Add Contact</Text>
                            </View>
                            <TouchableOpacity style={{flex:1,alignItems:'center',flexDirection:'row'}} onPress={goToSettings}>
                                <Feather name="settings" size={responsiveWidth(4)}style={{marginRight:responsiveWidth(3)}} color='black'/>
                                <Text>Settings</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modal>
        </>
    )
}
export default ChatScreen;