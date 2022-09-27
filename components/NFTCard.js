import { View, Text, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native' 
import { assets, CircleButton, COLORS, RectButton, SHADOWS, SIZES } from '../constants'
import { EthPrice, NFTTitle, SubInfo  } from './SubInfo' 
const NFTCard = ({data}) => {
   
    const navigaton = useNavigation()

  return (
    <View style={{
        backgroundColor:COLORS.white ,
        borderRadius:SIZES.font ,
        marginBottom:SIZES.extraLarge ,
        margin:SIZES.base,
        ...SHADOWS.dark ,
    }} >
        <View style={{width:'100%' , height:250}} >
            <Image 
            source={{ uri:data.prImg[0]}}
            resizeMode='cover'
            style={{width:'100%' , height:'100%' , borderTopLeftRadius:SIZES.font , borderTopRightRadius:SIZES.font}}
            />
            <CircleButton imgUrl={assets.heart} right={10} top={10}/>
           
        </View>
        <SubInfo cat={data.prCategory} time={data.createdAt}  />
        <View style={{width:'100%' , padding:SIZES.font ,
        //  flexDirection:'row' , justifyContent:'space-around' , alignItems:'center'
        }}>
        <NFTTitle title={data.prName} subTitle={data.prQuant}/>
        <View style={{
            marginTop:SIZES.font ,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center' ,
            flex:1
        }}>
            <EthPrice price={data.prPrice} />
            <RectButton minWidth={120} fontSize={SIZES.font} val={'Details'} handlePress={()=>navigaton.navigate("Details" , {data})} />
        </View>
        </View>
    </View>
  )
}

export default NFTCard