import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,Image, Pressable,FlatList, TouchableOpacity } from "react-native";
import style from "./Notification.Style";
import { responsiveWidth } from "../../Utils/Dimension";
import { CheckBox,Icon } from "@rneui/themed";

const NotificationScreen=()=>{
    const [edit,setEdit]=useState(false);
    const [allSelected,setAllselected]=useState(false);
    const data=[
        {id:1,image:true,title:"Schedule reminder: morning service on campus will begin at 7:00 AM! Come on, we'll wait for you! aaaaaaaaaaaaa a",type:'noti',time:'7:00 AM - 8:00 AM',isSelected:0},
        {id:2,image:false,title:"Schedule reminder: The Mount Hermon Bible Study will begin in 10 minutes, everyone Don't be late!",type:'noti',time:'6:00 AM - 7:00 AM',isSelected:0},
        {id:3,image:false,title:"Livia aaaaaaaaaaaaaaaaaaaaa a",type:'live',time:'Livia has invited you to join the Zion Church',isSelected:0},
        {id:4,image:false,title:"Livia",type:'fReqst',time:'Livia sent you a friend request.',isSelected:0},      
    ]
    const [data1,setData1]=useState(data);
    const selectItem=(id)=>{
        let data=[...data1];
        for(let d of data){
            if(d.id===id){
                if(d.isSelected===0){
                    d.isSelected=1
                }
                else if (d.isSelected===1){
                    d.isSelected=0
                }
                
            }
        };
        setData1(data);
    }
    const selectall=()=>{
        let data=[...data1];
        if(allSelected===false){
            for(let d of data){
                d.isSelected=1
            };
            setData1(data);
            setAllselected(true)
        }
        else if(allSelected===true){
            for(let d of data){
                d.isSelected=0
            };
            setData1(data);
            setAllselected(false)
        }
        
    }
    const deletenot=()=>{
        let data=[...data1];
        let filterData=data.filter((res)=>{
            return res.isSelected!==1
        });
        setData1(filterData);
        setAllselected(false) 
        if(filterData.length===0){
            setEdit(false)
        }
        
    }
    return(
        <>
            <SafeAreaView style={style.main}>
                <View style={style.HeaderView}>
                    <Text style={style.HeaderText1}>Notifications</Text>
                    <TouchableOpacity onPress={()=>{setEdit(!edit)}}>
                        <Text style={style.HeaderText2}>Edit</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={style.contentView}>
                    <FlatList
                        data={data1}
                        renderItem={({item})=>{
                            return(
                                <>
                                     <View style={style.notCardView}>
                                    {edit&&
                                      <CheckBox center
                                      style={{padding:'none'}} 
                                      checkedIcon={
                                      <Icon name="radio-button-checked" type="material" color="green" size={25}/>}
                                      uncheckedIcon={
                                      <Icon name="radio-button-unchecked" type="material" color="grey" size={25} />}
                                      checked={item.isSelected===1}
                                      onPress={()=>{selectItem(item.id)}}
                                  />}
    
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
                {edit&&
                <View style={style.footerView}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <CheckBox center
                            style={{padding:'none'}} 
                            checkedIcon={
                            <Icon name="radio-button-checked" type="material" color="green" size={25}/>}
                            uncheckedIcon={
                            <Icon name="radio-button-unchecked" type="material" color="grey" size={25} />}
                            checked={allSelected}
                            onPress={selectall}
                        />
                        <Text style={style.notText1}>Select all</Text>
                    </View>
                    <TouchableOpacity style={style.selectButView} onPress={deletenot}>
                        <Text style={[style.notText1,{color:'#FF3742'}]}>Delete</Text>     
                    </TouchableOpacity>
                </View>}
            </SafeAreaView>
        </>
    )
}
export default NotificationScreen;