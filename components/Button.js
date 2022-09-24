import { TouchableOpacity , Text, Image } from 'react-native'
import React from 'react'
import { COLORS , SHADOWS , SIZES  } from '../constants'

export const CircleButton = ({  handlePress ,imgUrl, ...props}) => {
  return (
    <TouchableOpacity style={{
        width:40 ,
        height:40 ,
        backgroundColor:COLORS.white ,
        position:'absolute' ,
        ...props ,
        borderRadius:SIZES.extraLarge,
        alignItems:'center' ,
        justifyContent:'center',
        ...SHADOWS.light
    }}
    onPress={handlePress}
    >
        <Image source={imgUrl} resizeMode='contain' style={{width:24 , height:24}} />
    </TouchableOpacity>
  )
}


export const RectButton = ({handlePress  , minWidth}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor:COLORS.primary ,   
            borderRadius:SIZES.large, 
            borderRadius:SIZES.base,
            padding:5 ,
            minWidth:minWidth ,
           
        }}
        onPress={handlePress}
        >
            <Text style={{color:COLORS.white , fontSize:SIZES.large , textAlign:'center'}}>Place a bid</Text>
        </TouchableOpacity>
    )
  }

