import { View, Text ,  ToastAndroid,
  Platform,
  AlertIOS, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect } from 'react'
import { HomeHeader, Input } from '../components'
import { RectButton, SIZES } from '../constants'
import { LoginRedux , reset } from '../redux/auth'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastProvider } from 'react-native-toast-notifications'

import { useToast } from "react-native-toast-notifications";
import Home from './Home';

let STORAGE_KEY = '@user_input';


const Login = ({navigation}) => {
    const dispatch  = useDispatch()
    const {user , isLoading , isError , isSccess , message} = useSelector(state =>state.auth)
    const [formData , setFormData] = useState({email:'' , password:''}) 
    const {email , password} = formData
    const toast = useToast();
    const saveData  = async(value)=>{
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        alert('saved ^.^')
      } catch (error) {
        alert('Failed to save data in the Storage')
      }
    }

    const readData  = async(STORAGE_KEY)=>{
      try {
        await AsyncStorage.getItem(STORAGE_KEY)
      } catch (error) {
        alert('Failed to get data from the Storage')
      }
    }

    const clearData  = async()=>{
      try {
        await AsyncStorage.clear()
        alert('cleard successfully')
      } catch (error) {
        alert('Failed to clear data from the Storage')
      }
    }


    useEffect(() => {
      if (isError) {
        ToastAndroid.show('Error inserted Data' , ToastAndroid.LONG)
      }
    }, [message]);
     

   
    


    const handlePress =()=>{
        if(!email || !password){
          ToastAndroid.show('Some feilds empty!!' , ToastAndroid.LONG)
        }else{
          dispatch(LoginRedux(formData))
        }
        if(user){
          saveData(user.token)
          navigation.navigate("Home" , {user , readData , STORAGE_KEY})
        } 
    }
    return (
    <View style={{ padding:SIZES.extraLarge }} >
        < View style={{height:100}}>
        </View>
      <View style={{flexDirection:'column'  , justifyContent:'center' , alignItems:'center'  , marginVertical:20 }} >
        
         <Input handleChange={(vl)=>setFormData({...formData , email:vl.trim()})}  name='email' label={'Email'} secure={false} holder={'Enter Your Email'} />
         <Input handleChange={(vl)=>setFormData({...formData , password:vl})}  name='password' label={'Password'} secure={true} holder={'Enter Your Password'} />
      
        </View>
         <RectButton  handlePress={handlePress} val={'Login'} minWidth={300} />
         <Text>Dont Have an Accounts ? </Text>
    </View>
  )
}

export default Login