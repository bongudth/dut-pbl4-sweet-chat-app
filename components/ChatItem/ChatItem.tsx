import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Pressable, View, Image, Text } from 'react-native'
import moment from "moment"
import styles from './styles'

export default function ChatItem({ chatItem }: any) {
  const user = chatItem.users[1]

  const navigation = useNavigation()

  const navChat = () => {
    navigation.navigate('ChatScreen', { id: chatItem.id })
  }

  return (
    <Pressable
      onPress={navChat}
      style={styles.item}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />
      <View>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.time}>{moment(chatItem.lastMessage.createdAt).format('LT')}</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.message}>{chatItem.lastMessage.content}</Text>
          {chatItem.newMessages ? <View style={styles.noti}><Text style={styles.count}>{chatItem.newMessages}</Text></View> : null}
        </View>
      </View>
    </Pressable>
  );
}
