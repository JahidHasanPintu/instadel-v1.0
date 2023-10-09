import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "1",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "2",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    },
];

export default function NavOptions() {
    const navigation = useNavigation();
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        <TouchableOpacity 
        onPress={()=>navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 mt-5 w-40`}>
            <View>
                <Image
                style={{width:120, height:120, resizeMode: "contain"}}
                source={{uri:item.image}}
                />
            </View>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color="white" type='antdesign'  />
        </TouchableOpacity>
    )}
    />
  )
}