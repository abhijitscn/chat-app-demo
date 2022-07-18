import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar,View,Text,Pressable,Image } from "react-native";
import style from "./MyContact.Style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight,responsiveWidth } from "../../Utils/Dimension";
import AlphabetList from "react-native-flatlist-alphabet";

import { sections } from "./fakeContactDb";
const MyContactScreen=({navigation})=>{

    const renderList=(item)=>{
        return (
            <View style={style.cardView}>
                <Image source={require('../../Assets/pictures/Avatar2.png')} style={{marginRight:responsiveWidth(2)}}/>
              <Text style={style.cardText}>{item.value}</Text>
            </View>
          );
    };

    const renderSectionHeader=(section)=>{
        <View style={{height:responsiveWidth(5)}}>
        <Text >{section.title}</Text>
      </View>
    }
    
    return(
        <>
            <SafeAreaView style={style.main}>
            <StatusBar  barStyle={'dark-content'}/>
            <View style={style.Headerview}>
                <View style={style.headerSub1}>
                    <Pressable style={[style.butView,{backgroundColor:'black'}]} onPress={()=>{navigation.goBack()}}>
                        <Ionicons name="chevron-back-outline" color='white' size={responsiveWidth(4.5)}/>
                    </Pressable>
                    <Text style={style.text3}>My Contacts</Text>
                    <View style={[style.butView,{backgroundColor:'#0002FC'}]}>
                        <Feather name="user-plus" color='white' size={responsiveWidth(4.5)}/>
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
                <AlphabetList
                    style={{flex: 1,marginTop:5}}
                    data={sections}
                    renderItem={renderList}
                    renderSectionHeader={renderSectionHeader}
                    sectionHeaderHeight={5}
                    letterItemStyle={{ height: responsiveWidth(10)}}
                    
                />
            </View>

            </SafeAreaView>
        </>
    )
}
export default MyContactScreen;