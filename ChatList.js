import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, Image } from 'react-native'



function ChatList({ item, navigation }){



function chatListItem({ item }){
return (
<View style={styles.chat_list_item}>
<Image
    style={styles.contact_image}
    source={{uri: item.contact_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.contact_name} numberOfLines={1}>{item.contact_name}</Text>
<Text style={styles.last_message} numberOfLines={1}>{item.last_message}</Text>
<Text style={styles.timestamp} numberOfLines={1}>{item.timestamp}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.chat_list}
    data={item}
    renderItem={chatListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default ChatList;

const styles = StyleSheet.create({
contact_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
contact_name: {
    flex: 1,
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 2,
    marginHorizontal: 10,
    marginTop: 5
  },
last_message: {
    flex: 1,
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 2,
    marginHorizontal: 10,
    marginTop: 5
  },
timestamp: {
    flex: 1,
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 2,
    marginHorizontal: 10,
    marginTop: 5
  }
});