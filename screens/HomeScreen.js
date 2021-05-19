import React , {useState,useEffect} from "react";
import {FlatList, Text, View,TouchableOpacity,Image} from 'react-native';
import UserList from "../components/UserList";

// import { useObserver } from "mobx-react-lite";

import { COLORS, SIZES } from "../constants";
import userApi from "../modules/userApi";

var s = require('../style')

 const HomeScreen = ({navigation,route })=> {
  const [users, setUsers] = useState([])
  const [numberUsers, setNumberUsers] = useState(6)



  useEffect(() => {
    getRandomUser()
  }, [])

  const  getRandomUser = async ()=> {
      let users = []
    for (let index = 0; index < numberUsers; index++) {
      let res =   await userApi.getRandomUser()
      users.push(res[0])
    }

    setUsers(users)
 
 }
      return (
    <>
      <TouchableOpacity onPress={()=> getRandomUser()} style={[{padding:SIZES.padding,alignItems:'center'}]}>
        <Text>Randomize me!</Text>
      </TouchableOpacity>
      <FlatList numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around',alignItems:'center'}}
          data={users} renderItem={(e)=><UserList {...e} />}/>
      </>
      );
    }
  


export default HomeScreen