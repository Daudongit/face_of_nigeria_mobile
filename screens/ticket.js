import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import Header from '../shared/header'

export default function Ticket({navigation}) {
  return (
    <View>
        <Header title="Ticket" navigation={navigation}/>
        <View style={globalStyles.container}> 
            <Text>Ticket Screen</Text>
        </View>
    </View>
  );
}