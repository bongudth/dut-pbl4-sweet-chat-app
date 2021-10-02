import React from 'react';
import { View, Image, Text } from 'react-native';
import moment from "moment";
import styles from './styles';

export default function ChatItem({ chatItem }) {
  const user = chatItem.users[1];

  return (
    <View style={styles.item}>
      <Image source={{uri: user.imageUri}} style={styles.image} />
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
    </View>
  );
}
