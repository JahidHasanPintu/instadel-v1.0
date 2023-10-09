import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw`bg-white p-5`}>

            <Text style={tw`text-black text-3xl font-bold mt-8`} >InstaDel</Text>
            <NavOptions/>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});