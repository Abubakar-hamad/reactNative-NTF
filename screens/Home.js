import React, { useState } from 'react'
import { View , SafeAreaView , FlatList  , Text} from 'react-native'
import { FocusedStatus, HomeHeader, NFTCard   } from '../components'
import {COLORS , NFTData} from '../constants'
const Home = () => {
  const [nftData  , setNftData]= useState(NFTData)  
  const handleSearch =(e) =>{
    if(!e.length) return setNftData(NFTData)
    const filteredData = NFTData.filter((item)=> 
    item.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
    if(filteredData.length){
      setNftData(filteredData)
    }else{
      setNftData(NFTCard)
    }
  }
  return (
    <SafeAreaView style={{felx:1}}>
        <FocusedStatus background={COLORS.primary} />
        <View style={{felx:1}}>
            <View style={{zIndex:0}}>
                <FlatList 
                data={nftData}
                renderItem={({item})=> <NFTCard data={item} />}
                keyExtractor={(item)=>item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                />
            </View>
            <View style={{position:'absolute'  ,top:0 , left:0 , bottom:0 , right:0 , zIndex:-1 }}>
                <View style={{backgroundColor:COLORS.primary , height:300 , }} />
                <View style={{backgroundColor:COLORS.white , flex:1 }} />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home