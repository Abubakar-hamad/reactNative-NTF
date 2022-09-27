import {useFonts} from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'


import Home from './screens/Home';
import Details from './screens/Details';
import Login from './screens/Login';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { useState } from 'react';
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme , 
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}
export default function App() {
  const [token , setToken] = useState('')
  const [loaded] = useFonts({
    InterBold:require("./assets/fonts/Inter-Bold.ttf") ,
    InterSemiBold:require("./assets/fonts/Inter-SemiBold.ttf") ,
    InterMedium:require("./assets/fonts/Inter-Medium.ttf") ,
    InterRegular:require("./assets/fonts/Inter-Regular.ttf") ,
    InterLight:require("./assets/fonts/Inter-Light.ttf") ,
  })

  if (!loaded) return null

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      jsonValue != null ? JSON.parse(jsonValue) : null;
      return setToken(jsonValue)
    } catch(e) {
      // error reading value
    }
  }

  getData()
  console.log(545454545454,token);
  return (

    <Provider store={store}>
    <NavigationContainer theme={theme} >
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home" >
         
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name='Details' component={Details}/>
          <Stack.Screen name='login' component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

