import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { Image, StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';


import logo from './assets/telephone-mascott.jpg'
import Index from './store/index.js'

export default function App() {
  
  let showContacts = Index();

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      <Text>Welcome to my Telephone app!</Text>
      <StatusBar style="auto" />
      <View style={styles.box1}>
        <Button
          title="Show Contacts"
          onPress={showContacts}
        />
        {/* <FlatList
        data={contacts}
        keyExtractor={({ item }) => item.id}
        renderItem={({ item }) => {
          return (
            <Button
            title={item.name}
            onPress={() => call(item)}
            />
          )
        }}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
