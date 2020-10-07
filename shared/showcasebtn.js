import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function ShowcaseButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{zIndex:5,marginTop:15}}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#339933',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});