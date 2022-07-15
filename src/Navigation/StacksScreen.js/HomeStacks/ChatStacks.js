import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../../../Screens/ChatScreen/Chat.Screen";
import MyGroupScreen from "../../../Screens/MyGroupScreen/MyGroup.Screen";

const Stack=createNativeStackNavigator();

const ChatStack=()=>{
    return(
        <Stack.Navigator initialRouteName="chat"  screenOptions={{headerShown:false}}>
            <Stack.Screen name="chat" component={ChatScreen}/>
            <Stack.Screen name='MyGroup' component={MyGroupScreen}/>
        </Stack.Navigator>
    )
}
export default ChatStack;
