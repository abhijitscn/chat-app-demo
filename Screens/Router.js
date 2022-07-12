import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Live from "./Live";
import Course from "./Course";
import MyProfile from "./MyProfile";
import Notice from "./Notice";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Tab=createBottomTabNavigator();
const Router=()=>{
    return(
        <NavigationContainer >
            <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'black'
            }}
            
            >
                <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon:({color,size})=>(
                        <AntDesign name="home" color={color} size={size}/>
                    )
                }}
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
export default Router;