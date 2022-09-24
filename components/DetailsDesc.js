import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDesc = ({data}) => {
    const [text , setText] = useState(data.description.slice(0 ,100)) 
    const [readMore , setReadMore] = useState(false)
    const handleShow =()=>{
        if(!readMore){
            setText(data.description)
            setReadMore(true)
        }else{
            setText(data.description.slice(0 ,100))
            setReadMore(false)
        }
    }
  return (
    <>
    <View style={
        {
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }
    }>
     <NFTTitle title={data.name} subTitle={data.creator} />
     <EthPrice  price={data.price}/>
    </View>
    <View style={{marginVertical:SIZES.extraLarge *1.5}}></View>
      <Text style={{fontFamily:FONTS.semiBold , fontSize:SIZES.small , color:COLORS.primary}} >DESCRIPTION</Text>
      <Text style={{fontFamily:FONTS.regular , 
        fontSize:SIZES.small ,
         color:COLORS.secondary ,
          lineHeight:SIZES.large}}>
            {text}
            {!readMore && ' . . .'}
            <Text style={{fontFamily:FONTS.bold}} onPress={handleShow}>
                    {!readMore ? 'Show More' : 'Show Less'}
            </Text>
          </Text>
    </>
  )
}

export default DetailsDesc