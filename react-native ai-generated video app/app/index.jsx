import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { images } from '../constants'

export default function App () {
  return (
    <SafeAreaView className=" bg-primary h-full">
        <ScrollView contentContainerStyle={{ height:'100%' }}>
          <View className=" w-full justify-start items-center
           h-full px-4 mt-16">
            <Image source={images.logo}
                   className="w-[130px] h-[84px]"
                   resizeMode='contain'/>

            <Image source={images.cards}
                   className="max-w-[380px] h-[300px] w-full"
                   resizeMode='contain'/> 

            <View>
                <Text className="text-3xl text-white font-bold text-center">
                  Discover Endless Possibilities with {''}
                  <Text className='text-secondary-200'> 
                    Aora
                  </Text>
                </Text> 
                <Image source={images.path}
                       className='w-[136px] h-[15px] absolute -bottom-2 -top-8'
                       resizeMode='contain'/>
            </View>

            <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
                Where creativity meets innovation: embark on a journey of limitless exploration with aora
            </Text>       
           </View>

        </ScrollView>
    </SafeAreaView>
  )
}

