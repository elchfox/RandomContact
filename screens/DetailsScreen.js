import React , {useState,useEffect} from "react";
import {FlatList, TouchableOpacity,Text, View,Image} from 'react-native';
import { COLORS, SIZES } from "../constants";
import Icon from 'react-native-vector-icons/MaterialIcons';

var s = require('../style')

 const DetailsScreen = ({navigation,route })=> {
  const [detail, setDetail] = useState({})

        useEffect(() => { 

          let res = route.params.detail
          let detail = {}

          let location = res.location;
          let name = res.name;
          detail.name =  `${name.first} ${name.last}`
          detail.address = `${location.street.number} ${location.street.name}, ${location.city}, ${location.country}`
          detail.email = res.email
          detail.picture = res.picture.large
          detail.phone =  res.phone
          setDetail(detail)
      },[])
      return (
        <>

            <TouchableOpacity 
            onPress={()=> navigation.goBack()}
            style={[{ flexDirection:'row',backgroundColor:COLORS.gray, padding:SIZES.padding}]}>
              
               <Icon name={'keyboard-arrow-left'} size={22} />
               <Text>Back</Text>
            </TouchableOpacity>
        {detail.name !== undefined && 
        <View style={[s.center,{flex:1}]}> 
          <Image source={{uri:detail.picture}} style={{width:150,height:150,margin:30}} />
          <Text  style={{lineHeight:25}}>{detail.name}</Text>
          <Text>{detail.email}</Text>
          <Text>{detail.address}</Text>
          <Text>{detail.phone}</Text>
      </View>}
      </>
      );
    }
  


export default DetailsScreen
