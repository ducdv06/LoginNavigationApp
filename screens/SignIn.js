import React, {useContext} from "react";
import {View, Text, Button} from "react-native";
import {AppContext} from "../AppContext";

export default function SignIn({navigation}){

  const {setIsLoggedIn} = useContext(AppContext);

  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

      <Text>Sign In Screen</Text>

      <Button
        title="Login"
        onPress={()=> setIsLoggedIn(true)}
      />

      <Button
        title="Go to Sign Up"
        onPress={()=> navigation.navigate("SignUp")}
      />

    </View>
  )
}