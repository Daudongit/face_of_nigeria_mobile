import React from 'react'
import { StyleSheet, View, Text,Image } from 'react-native'
import { images } from '../styles/global'

export default function EventCard({content}){
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.status}>INTERVIEW</Text>
                <Image source={images.events[content.key]} style={styles.image}/>
                <View style={styles.eventInfo}>
                    <Text style={styles.title}>{content.title}</Text>
                    <Text style={styles.date}>{content.date}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
    },
    wrapper:{
        flexBasis:'90%',
        position:'relative',
    },
    status:{
        position:'absolute',
        top:20,
        right:20,
        backgroundColor:'#6A0DAD',
        borderRadius:5,
        paddingVertical:4,
        paddingHorizontal:7,
        zIndex:5,
        color:'#fff',
        fontSize:12,
        textTransform: 'uppercase',
    },
    eventInfo:{
        backgroundColor:'#BADDBA',
        padding:20,
    },
    title:{
        fontSize:18,
        fontWeight:'400',
        textTransform: 'uppercase',
    },
    image:{
        width:'100%',
        height:258
    },
    date:{
        marginTop:10
    }
})