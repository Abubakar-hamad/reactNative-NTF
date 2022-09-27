import { View, Text , Image , TextInput, TouchableOpacity } from 'react-native'

import { assets, COLORS, FONTS, SIZES } from '../constants'
import { Input } from './index'


const HomeHeader = ({onSearch , onFilter}) => {
  return (
    <View style={{ padding:SIZES.extraLarge}}>
      <View style={{flexDirection:'row'  , justifyContent:'space-between' , alignItems:'center'  }} >
        
          <Image 
          source={assets.logo}
          resizeMode='contain'
          style={{width:90 , height:40}}
          />
          <View style={{width:40 , height:40}} >
          <Image 
          source={assets.person04}
          resizeMode='contain'
          style={{width:'100%' , height:'100%'}}
          />
          <Image 
          source={assets.badge}
          resizeMode='contain'
          style={{position:'absolute' , width:15 , height:15 , bottom:0 , right:0}}
          />
          </View>
      
      </View>
      <View style={{marginTop:10 , marginBottom:10}} >

      <Text style={{color:COLORS.gray , fontSize:SIZES.font , textTransform:'capitalize' , fontFamily:FONTS.semiBold}}>Hello , Sara</Text>
      <Text style={{color:COLORS.white , fontSize:SIZES.large , textTransform:'capitalize' , fontFamily:FONTS.semiBold}}>let's find masterpiece art</Text>
      </View>


      <View  style={{flexDirection:'row',justifyContent:'center' ,paddingHorizontal:SIZES.medium , paddingVertical:SIZES.small , borderRadius:SIZES.large  , alignItems:'center' , backgroundColor:'gray'  }}>
        <Image 
        source={assets.search}
        resizeMode='contain'
        style={{ width:24 , height:24  , marginHorizontal:SIZES.font }}
        />
        <TextInput onChangeText={onSearch} style={{ width:'100%' }}
          placeholder='Search NTFs'
        />
      </View>
        <View style={{width:'100%' , flexDirection:'row' , justifyContent:'space-around' ,alignItems:'center' , marginTop:SIZES.large}}>
          <TouchableOpacity onPress={()=>onFilter("all")}><Text style={{backgroundColor:'#db83d9'  , padding:SIZES.base  ,borderRadius:SIZES.medium , fontFamily:FONTS.bold}}>all items</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>onFilter("electronic")}><Text style={{backgroundColor:'#D8EA64ed'  , padding:SIZES.base  ,borderRadius:SIZES.medium , fontFamily:FONTS.bold}}>electronic</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>onFilter("fashion")}><Text style={{backgroundColor:'#6495ED'  , padding:SIZES.base  ,borderRadius:SIZES.medium , fontFamily:FONTS.bold}}>fashion</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>onFilter("toys")}><Text style={{backgroundColor:'#9FE2BF'  , padding:SIZES.base  ,borderRadius:SIZES.medium , fontFamily:FONTS.bold}}>toys</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeHeader