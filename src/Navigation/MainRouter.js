import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import Course from '../Screens/Course/Course';
import Live from '../Screens/Live/Live';
import Notice from '../Screens/Notice/Notice';
import MyProfile from '../Screens/MyProfile/MyProfile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeStack from "./StacksScreen.js/HomeStacks/HomeStacks";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab=createBottomTabNavigator();
const MainNavigator=()=>{
    const getTabBarVisibility=(route)=>{
        const routeName = getFocusedRouteNameFromRoute(route)?? 'Feed';
        if(routeName==='SwitchSpace'){
            return 'none'
        }
        else{
            return 'flex'
        }
    }
    return(
        <NavigationContainer >
            <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'black',
                
            }}
            
            >
                <Tab.Screen name="Home" component={HomeStack} 
                options={({route})=>({
                    tabBarIcon:({color,size})=>(
                        <AntDesign name="home" color={color} size={size}/>
                    ),
                    tabBarStyle:{display:getTabBarVisibility(route)}
                })}
                />
                <Tab.Screen name="Live" component={Live}
                options={{
                    tabBarIcon:({color,size})=>(
                        <AntDesign name="instagram" color={color} size={size}/>
                    )
                }}
                />
                <Tab.Screen name="Course" component={Course}
                options={{
                    tabBarIcon:({color,size})=>(
                        <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={size}/>
                    )
                }}
                />
                 <Tab.Screen name="Notice" component={Notice}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Feather name="bell" color={color} size={size}/>
                    ),
                    tabBarBadge:99
                }}
                />
                <Tab.Screen name="Me" component={MyProfile}
                options={{
                    tabBarIcon:({color,size})=>(
                        <EvilIcons name="user" color={color} size={size}/>
                        
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigator;