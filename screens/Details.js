import React from 'react'
import { View  , Text, Image ,StatusBar , FlatList , SafeAreaView} from 'react-native'
import { Comment, FocusedStatus, HomeHeader } from '../components'
import { COLORS  ,assets , FONTS  , SIZES , SHADOWS ,  } from '../constants'
import { CircleButton , RectButton  ,   } from '../constants'
import { DetailsDesc , DetailsBid , SubInfo } from '../components'

const DetailsHeader = ({data  , navigation})=>{
    return(

      <View style={{width:'100%' , height:375}}>
        <Image 
          source={{uri:data.prImg[0]}}
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
    <RectButton minWidth={200} fontSize={SIZES.font} val={'Details'}  />
    </View>

    <FlatList 
      // data={data._id}
      // renderItem={<DetailsBid bid={data.comments} />}
      renderItem={({item}) => <DetailsBid bid={item} />}
      keyExtractor ={(item) => item._id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extraLarge * 3}}
      ListHeaderComponent ={()=>(
        <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo cat={data.prCategory} time={data.createdAt} />
            <View style={{padding:SIZES.font}} >
              <DetailsDesc data={data} />
           
              {data.comments && 
                <Comment id={data._id} />
              }
            </View>
        </React.Fragment>
      )}
    />
    
</SafeAreaView>
  )
}

export default Details


