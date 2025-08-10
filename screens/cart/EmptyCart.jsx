import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export default function EmptyCart() {
    const navigation = useNavigation()
  return (
    <View className='flex-1 justify-center items-center gap-4'>
        <FontAwesome name="shopping-bag" size={50} color={''} s />
      <Text>your cart is empty</Text>
      <Text numberOfLines={2} className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
   <Button mode='contained' onPress={()=>navigation.navigate('HomeScreen')}>Goto shop</Button>
    </View>
  )
}