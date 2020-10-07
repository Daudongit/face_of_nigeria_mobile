import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from '../shared/header'
import EventCard from './../shared/event-card'

export default function Event({navigation}) {
    const [events, setEvents] = useState([
        {
            title:'QUEEN PEACE MICHEAL (FACE OF NIGERIA 2019) INTERVIEW', 
            date:'February 27, 2020',
            key:1
        },
        {
            title:'QUEEN UGO OKWUTE (FACE OF NIGERIA 2019) INTERVIEW', 
            date:'February 27, 2020',
            key:2
        },
        {
            title:'OFFICIAL UNVEILING OF THE MISS HERITAGE INTERNATIONAL 2020 NIGERIA DELEGATE ( QUEEN LINDA ONUORA)', 
            date:'February 27, 2020',
            key:3
        },
    ])
    return (
        <View style={{flex:1}}>
            <Header title="Event" navigation={navigation}/>
            <FlatList data={events} renderItem={({ item }) => (
                <EventCard content={item}/>
            )}/>
        </View>
    )
}