import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar } from 'react-native'
import Header from '../shared/header'
import ShowcaseButton from '../shared/showcasebtn.js'

export default function History({navigation}) {

    const handlePress = ()=>{}

    return (
        <View>
            <StatusBar hidden />
            <Header title="" navigation={navigation}/>
            <ImageBackground 
                source={require('../assets/images/banner.jpg')}
                style={styles.banner}
                >
                    <Text style={styles.showcase}>Face of Nigeria</Text>
                    <Text style={styles.showcaseText}>
                        Beyond showcasing beauty and grace, builds the ideal model that represents what an African feminine cultural identity of this generation ought to be. 
                    </Text>
                    <ShowcaseButton onPress={handlePress} text='register now'/>
                    <View style={styles.overlay}></View>
            </ImageBackground>
        </View>
    )
}

const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    banner:{
        // flex:1, 
        justifyContent:'center',
        alignItems:'center',
        height:height,
        // height:'100vh',
        // transform: 'translateX(0px) translateY(-148px)',
    },
    showcase:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 17,
        textAlign: 'center',
        zIndex:5,
    },
    showcaseText:{
        paddingVertical:10,
        paddingHorizontal:30,
        fontWeight: '600',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        zIndex:5,
    },
    overlay:{
        position:'absolute',
        top:0,
        right:0,
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        opacity:0.6,
        justifyContent:'center',
        alignItems:'center',
    }
})