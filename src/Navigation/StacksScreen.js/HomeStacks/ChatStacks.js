import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../../../Screens/ChatScreen/Chat.Screen";
import MyGroupScreen from "../../../Screens/MyGroupScreen/MyGroup.Screen";
import NotificationScreen from "../../../Screens/Notifications/Notification.Screen";
import MyContactScreen from "../../../Screens/MyContact/MyContact.Screen";
import MessageSettings from "../../../Screens/MessageSettings/MessageSettings.Screen";

const Stack=createNativeStackNavigator();

const ChatStack=()=>{
    return(
        <Stack.Navigator initialRouteName="chat"  screenOptions={{headerShown:false}}>
            <Stack.Screen name="chat" component={ChatScreen}/>
            <Stack.Screen name='MyGroup' component={MyGroupScreen}/>
            <Stack.Screen name="notification" component={NotificationScreen}/>
            <Stack.Screen name="contact" component={MyContactScreen}/>
            <Stack.Screen name="mSettings" component={MessageSettings}/>
        </Stack.Navigator>
    )
}
export default ChatStack;
