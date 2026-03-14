import React from "react";
import { View, Text, Button } from "react-native";

export default function SignUp({navigation}) {

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      
      <Text>Sign Up Screen</Text>

      <Button
        title="Back to Sign In"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}