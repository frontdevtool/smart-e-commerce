import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '@/components/custom/HomeHeader'
import ProductCart from '@/components/custom/ProductCart'

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 '>
   <HomeHeader/>
      <Text>HomeScreen</Text>
      <ProductCart/>
    </SafeAreaView>
  )
}