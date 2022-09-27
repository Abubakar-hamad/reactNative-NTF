import { View, Text , FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DetailsBid from './DetailsBid'
import UseFetch from '../Fetch/FetchData'
import { FONTS, SIZES } from '../constants'

const Comment = (id) => {
  // const clearData  = async()=>{
  //   try {
  //     await AsyncStorage.clear()
  //     alert('cleard successfully')
  //   } catch (error) {
  //     alert('Failed to clear data from the Storage')
  //   }
  // }
  // clearData()
    const {data  , isLoding  , isError , message} = UseFetch(`comment/${id.id}`)
  console.log(data);
    useEffect(()=>{
    //     axios.get(`https://abubakar-store.herokuapp.com/comment/${id.id}`)
    // .then(res=>setComments(res.data.products))
    // .catch(err => console.log(err))
    } ,[])
    return (
      <>
    
    <View>
        <Text style={{fontSize:SIZES.large , fontFamily:FONTS.bold , textTransform:'uppercase' , paddingTop:SIZES.large * 2}}>
         {data.length > 0 ? 'Comments'  :  'No Comments added yet'} 
        </Text>
      </View>

    <FlatList 
    data={data}
    renderItem={(comm)=> <DetailsBid bid={comm}  />}
    keyExtractor={(comm)=> comm._id}
    />
      
    </>
  )
}

export default Comment