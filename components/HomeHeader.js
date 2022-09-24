import { View, Text , Image , TextInput } from 'react-native'
import { assets, COLORS, FONTS, SIZES } from '../constants'


const HomeHeader = ({onSearch}) => {
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
    </View>
  )
}

export default HomeHeader