import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/core'
import { SafeAreaView, FlatList, StyleSheet } from 'react-native'
import MessageItem from '../components/MessageItem/MessageItem'
import MessageInput from '../components/MessageInput/MessageInput'
import ChatData from '../assets/data/ChatData'

const ChatScreen = () => {
  const route = useRoute()

  const navigation = useNavigation()
  navigation.setOptions({ title: 'Khanh Linh' })

  return (
    <SafeAreaView style={styles.chatContainer}>
      <FlatList
        data={ChatData.messages}
        renderItem={({ item }) => <MessageItem message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  }
})

export default ChatScreen
