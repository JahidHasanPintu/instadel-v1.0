import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'

const MapScreen = () => {
    return (
        <SafeAreaView style={tailwind`bg-white p-5`}>
            <View>
                <Text>Here is the MapScreen</Text>
            </View>
        </SafeAreaView>

    )
}

export default MapScreen

const styles = StyleSheet.create({})