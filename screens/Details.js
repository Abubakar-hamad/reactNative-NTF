import React from 'react'
import { View  , Text, Image ,StatusBar , FlatList , SafeAreaView} from 'react-native'
import { FocusedStatus, HomeHeader } from '../components'
import { COLORS  ,assets , FONTS  , SIZES , SHADOWS ,  } from '../constants'
import { CircleButton , RectButton  ,   } from '../constants'
import { DetailsDesc , DetailsBid , SubInfo } from '../components'

const DetailsHeader = ({data  , navigation})=>{
    return(

      <View style={{width:'100%' , height:375}}>
        <Image 
          source={data.image}
          resizeMode='cover'
          style={{width:'100%' , height:'100%'}}
          />
          <CircleButton imgUrl={assets.left} handlePress={()=>navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10} />

        <CircleButton imgUrl={assets.heart} 
          right={15}
          top={StatusBar.currentHeight + 10} />

       
    </View>
  )
}

const Details = ({route , navigation}) => {
  const {data} = route.params
  
  return (

<SafeAreaView style={{flex:1}} >      
    <FocusedStatus 
    barStyle='dark-content' 
    backgroundColor='transparent'
    translucent={true}
    />
    <View style={{width:'100%'  , 
    position:'absolute' ,

    ...SHADOWS.light ,
    zIndex:1  , bottom:0 ,
     justifyContent:'center' ,
     alignItems:'center' , 
     paddingVertical:SIZES.font}} >
    <RectButton minWidth={200} fontSize={SIZES.font}  />
    </View>

    <FlatList 
      data={data.bids}
      renderItem={({item}) => <DetailsBid bid={item} />}
      keyExtractor ={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extraLarge * 3}}
      ListHeaderComponent ={()=>(
        <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{padding:SIZES.font}} >
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style={{fontFamily:FONTS.semiBold , fontSize:SIZES.small , color:COLORS.primary ,marginVertical:SIZES.extraLarge  , textTransform:'uppercase'}}>current Bid</Text>
              )}
            </View>
        </React.Fragment>
      )}
    />
    
</SafeAreaView>
  )
}

export default Details


