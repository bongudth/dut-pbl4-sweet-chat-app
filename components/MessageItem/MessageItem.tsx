import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const myId = 'u1';

const MessageItem = ({ message }: any) => {
  const isMine = message.user.id === myId;

  return (
    <View style={[
      styles.messageItem, {
        backgroundColor: isMine ? 'snow' : 'indianred',
        marginLeft: isMine ? 'auto' : 10,
        marginRight: isMine ? 10 : 'auto',
      }
    ]}>
      <Text style={{ color: isMine ? 'indianred' : 'white' }}>
        {message.content}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  messageItem: {
    maxWidth: '75%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
})

export default MessageItem
