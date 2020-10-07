import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import Header from '../shared/header'

export default function Training({navigation}) {
  return (
    <View>
        <Header title="Event" navigation={navigation}/>
        <View style={globalStyles.container}>
            <Text>Training Screen</Text>
        </View>
    </View>
  );
}