import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View , SafeAreaView , FlatList  , Text} from 'react-native'
import { FocusedStatus, HomeHeader, NFTCard   } from '../components'
import {COLORS , NFTData} from '../constants'
import UseFetch from '../Fetch/FetchData'



const Home = () => {
  
 
  const [filter , setFilter] = useState('')  
  const [nftData  , setNftData]= useState('')  

  const {data , isLoading , isError} =  UseFetch(filter  ?`prod/filter?prCategory=${filter}` : 'prod')
  const items = data.products



  const handleSearch =(e) =>{
    if(!e.length) return setNftData(items)
    const filteredData = items.filter((item)=> 
    item.prName.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
    if(filteredData.length){
      setNftData(filteredData)
    }else{
      setNftData(items)
    }
  }

  const  handleFilter =( vl)=>{
    if(vl === 'all') return setFilter('')
    setFilter(vl)
  }


  return (
    <SafeAreaView style={{felx:1}}>
        <FocusedStatus background={COLORS.primary} />
        <View style={{felx:1}}>
            <View style={{zIndex:1}}>
                <FlatList 
                data={nftData ? nftData : items}
                renderItem={({item})=> <NFTCard data={item} />}
                keyExtractor={(item)=>item._id}
                
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader onSearch={handleSearch} onFilter={handleFilter}/>}
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