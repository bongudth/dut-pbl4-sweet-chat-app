import React from 'react'

import {View, Text, Button, StyleSheet} from "react-native"

const SigninScreen = () => {
  return (
    <View style={styles.signinContainer}>
      <Text>SignInScreen</Text>
      <Button title="Click here" onPress={() => alert("Button clicked!")} />
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})