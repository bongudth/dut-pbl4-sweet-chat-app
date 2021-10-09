import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatItem from '../components/ChatItem/ChatItem';
import ChatItemData from '../assets/data/ChatItemData';

export default function TabOneScreen() {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={ChatItemData}
        renderItem={({ item }) => <ChatItem chatItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'white',
    width: 320,
    padding: 10,
    scrollable: true,
  }
})