import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { images } from '../constants'

export default function App () {
  return (
    <SafeAreaView className=" bg-primary h-full">
        <ScrollView contentContainerStyle={{ height:'100%' }}>
          <View className=" w-full justify-center items-center
           h-full px-4">
            <Image source={images.logo}
                   className="w-[130px] h-[84px]"
                   resizeMode='contain'/>
           </View>

        </ScrollView>
    </SafeAreaView>
  )
}

