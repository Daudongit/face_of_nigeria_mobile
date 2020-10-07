import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
        <Text style={styles.headerText}>{title}</Text>
        <Image source={require('../assets/images/logo-light.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#339933',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
    color:'#fff',
  },
  logo: {
    width: 65,
    height: 30,
    position: 'absolute',
    right:20,
  },
});