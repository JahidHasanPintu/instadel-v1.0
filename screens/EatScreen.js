import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'twrnc'

const EatScreen = () => {
    return (
        <SafeAreaView style={tailwind`bg-white p-5`}>
            <View>
                <Text>EatScreen</Text>
            </View>
        </SafeAreaView>

    )
}

export default EatScreen

const styles = StyleSheet.create({})