import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from '@/components/custom/HomeHeader';
import ProfileSection from '@/components/custom/ProfileSectionButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Divider } from 'react-native-paper';
import ProfileSectionButton from '@/components/custom/ProfileSectionButton';

export default function ProfileScreen({navigation}) {
  return (
      <SafeAreaView className='flex-1 '>
     <HomeHeader/>
     <ProfileSectionButton title={'My Order'} onPress={()=>navigation.navigate('OrdersScreen')}/>
     <ProfileSectionButton title={'Language'}/>
     <ProfileSectionButton title={'Logout'}/>

      </SafeAreaView>
  )
}