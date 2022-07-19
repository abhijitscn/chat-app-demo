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
   <MainNavigator/>
   </>
  );
};



export default App;
