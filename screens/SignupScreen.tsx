import React from 'react'

import {View, Text, Button, StyleSheet} from "react-native"

const SignupScreen = () => {
  return (
    <View style={styles.signupContainer}>
      <Text>SignUpScreen</Text>
      <Button title="Click here" onPress={() => alert("Button clicked!")} />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})