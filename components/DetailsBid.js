import { View, Text  , Image} from 'react-native'
import React from 'react'
import { EthPrice } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsBid = ({bid}) => {
  console.log(bid.item);
  const comm = bid.item
  return (
    <View style={{
        width:'90%' ,
        flexDirection:'row',
        // justifyContent:'center' ,
        alignItems:'center',
        marginHorizontal:SIZES.base,
        marginVertical:SIZES.base,
        padding:5 ,
        marginHorizontal:'5%',
        backgroundColor:'#fff',
        borderRadius:SIZES.base
      
    }}>
     
      <View>
        <Text style={{
        fontFamily:FONTS.semiBold ,
        fontSize:SIZES.small ,
        marginTop:3 ,
      }}>
         {comm?.text}
      </Text>
      <Text
        style={{
        fontFamily:FONTS.regular ,
        fontSize:SIZES.small - 2 ,
        marginTop:3
        }}
      >
        By {comm?.userName}
       
        </Text>
      </View>
      {/* <EthPrice price={bid.prPrice} /> */}
    </View>
  )
}

export default DetailsBid