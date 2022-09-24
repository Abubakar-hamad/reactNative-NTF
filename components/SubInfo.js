import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES , FONTS , SHADOWS , COLORS, assets } from '../constants'

export const NFTTitle = ({title , subTitle }) => {

  return (
    <View >
      <Text style={{color:COLORS.primary  , fontSize:SIZES.extraLarge , fontFamily:FONTS.semiBold}} >{title}</Text>
      <Text style={{color:COLORS.primary  , fontSize:SIZES.font , fontFamily:FONTS.regular}}>by : {subTitle}</Text>
      {/* <Text style={{color:COLORS.gray}} > {price}</Text> */}
    </View>
  )
}


export const EthPrice = ({price}) => {
    return (
      <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
        <Image 
            source={assets.eth}
            resizeMode='center'
        />
        <Text>{price}</Text>
      </View>
    )
  }
  

export const ImgagCmp = ({ imgUrl , index}) => {
  return (
   <Image 
    source={imgUrl}
    resizeMode='contain'
    style={{
        width:48,
        height:48 ,
        marginLeft:index === 0 ? 0 : -SIZES.font
    }}
   />
  )
}

export const People = () => {
  return (
    <View style={{flexDirection:'row'}}>
      {[assets.person01 , assets.person02 , assets.person03 ].map((imgUrl , index)=>(
        <ImgagCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  )
}
export const EndDate = () => {
  return (
    <View style={{
        backgroundColor:COLORS.white,
        borderRadius:SIZES.base ,
        flexDirection:'column' ,
        justifyContent:'center' ,
        alignItems:'center' ,
        padding:10 ,
        maxWidth:'50%'
    }}>
      <Text style={{color:'gray'}}>Ending in</Text>
      <Text style={{fontSize:SIZES.large , fontWeight:'bold'}}>12h 30m</Text>
      </View>
    )
  }
  

  export const SubInfo = () => {
    return (
      <View style={{
        width:'100%',
        paddingHorizontal:SIZES.extraLarge,
        marginTop:-SIZES.extraLarge,
        justifyContent:'space-between' ,
        flexDirection:'row'
        }}>
        <People />
        <EndDate />
      </View>
    )
  }
  