import { View, Text , TextInput  } from 'react-native'

import React from 'react'
import { SIZES } from '../constants'

export const Input = ({label , holder , secure , handleChange , name}) => {
  return (
    <View style={{ fontSize:SIZES.large , flexDirection:'row'  , marginVertical:SIZES.large , alignItems:'center' , justifyContent:'center' }}>
      <Text style={{flex:1 , fontSize:SIZES.large}} >{label}</Text>
      <TextInput onChangeText={handleChange} name={name} style={{flex:3 , height:50 , paddingHorizontal:10 , fontSize:SIZES.large  , backgroundColor:'#d2d2d2' , borderRadius:SIZES.large}}
        placeholder={holder}
        secureTextEntry={secure}
      />
    </View>
  )
}
