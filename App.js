/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import MainNavigator from './src/Navigation/MainRouter';
import PushNotification from 'react-native-push-notification';
import MainStack from './src/Navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
const App=()=> {
  useEffect(()=>{
    createChannel();
  },[]);

  const createChannel=()=>{
    PushNotification.createChannel(
      {
        channelId:'demo',
        channelName:'demo Channel'
      }
    )
  }
  return (
   <>
   {/* <NavigationContainer>
   <MainNavigator/>
   </NavigationContainer> */}
   <MainStack/>
   </>
  );
};



export default App;
