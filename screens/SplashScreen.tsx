import React from 'react'
import {View, Text, Pressable, Dimensions, StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/core'

const SplashScreen = () => {
  const navigation = useNavigation()

  const navChat = () => {
    navigation.navigate('SigninScreen')
  }

  return (
    <View style={styles.splashContainer}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View 
      animation="fadeInUpBig"
      style={styles.footer}
      >
        <Text style={styles.title}>Stay connected with your friends</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <Pressable 
          style={styles.button}
          onPress={navChat}
        >
          Get Started
        </Pressable>
      </Animatable.View>
    </View>
  )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.4;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'indianred',
    height: height,
    width: '100%',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: 'indianred',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'indianred',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'indianred',
    color: 'snow',
    width: '100%',
    height: 40,
    fontFamily: 'BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    cursor: 'pointer',
  }
})

export default SplashScreen