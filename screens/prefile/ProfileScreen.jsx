import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from '@/components/custom/HomeHeader';

export default function ProfileScreen() {
  return (
      <SafeAreaView className='flex-1 '>
     <HomeHeader/>
        <Text>cart scren</Text>
      </SafeAreaView>
  )
}