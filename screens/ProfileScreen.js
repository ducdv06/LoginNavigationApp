import React, {useContext} from "react";
import {View, Text, Button} from "react-native";
import {AppContext} from "../AppContext";

export default function ProfileScreen(){

  const {setIsLoggedIn} = useContext(AppContext);

  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

      <Text>Profile Screen</Text>

      <Button
        title="Sign Out"
        onPress={()=> setIsLoggedIn(false)}
      />

    </View>
  )
}