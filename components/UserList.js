import React from "react";
import { TouchableOpacity,Text, View,Image} from 'react-native';
import { COLORS, SIZES } from "../constants";
import { useNavigation } from '@react-navigation/native';

const UserList = ({item,index })=> {

      const navigation = useNavigation();
      return (
        <View style={ {width:"45%",marginBottom:10}}>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('Details',{detail:item})} 
        style={[{padding:SIZES.padding2,borderBottomColor:"black",borderBottomWidth:0.5,  
        alignItems:'center',
        backgroundColor:COLORS.gray}]}>
          <Image source={{uri:item.picture.large}} style={{width:150,height:150}} />
          <Text>{item.name.first} {item.name.last}</Text>
          <Text>{item.phone}</Text>
        </TouchableOpacity> 
        </View>
      );
    }
  


export default UserList
