import React, { useState } from 'react'
import { KeyboardAvoidingView, Pressable, Platform, TextInput, StyleSheet } from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

const MessageInput = () => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    setMessage('')
  }

  return (
    <KeyboardAvoidingView
      style={styles.messageInput}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <MaterialCommunityIcons name='emoticon-excited-outline' style={styles.iconButton} />
      <Feather name="camera" style={[styles.iconButton, { marginLeft: 0 }]} />
      <MaterialCommunityIcons name="microphone-outline" style={[styles.iconButton, { marginLeft: 0 }]} />
      <TextInput
        style={styles.inputContainer}
        value={message}
        onChangeText={setMessage}
        placeholder='Type something...'
      />
      <Pressable onPress={sendMessage}>
        {message ? <MaterialCommunityIcons name="send-circle-outline" style={[styles.iconButton, { marginLeft: 0 }]} /> : null}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  messageInput: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconButton: {
    color: 'indianred',
    fontSize: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  inputContainer: {
    backgroundColor: 'snow',
    color: 'indianred',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    border: '1px solid indianred',
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
  },
})

export default MessageInput
