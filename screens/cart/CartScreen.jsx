import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '@/components/custom/HomeHeader'
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
     <SafeAreaView className='flex-1 '>
    <HomeHeader/>
       <Text>cart scren</Text>
     </SafeAreaView>
  )
}