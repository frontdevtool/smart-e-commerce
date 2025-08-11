import { View, Text } from 'react-native'
import React from 'react'
import { Card, Divider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function OrderCard() {
  return (

   <Card style={{width : '90%'}}>
    <Text className='text-center p-4'>  My Orders </Text>
    <Divider/>
    <Card.Content className='flex-row justify-between p-4'>
      <Text variant="titleLarge">total price </Text>
      <Text variant="bodyMedium">10$</Text>
    </Card.Content>
    <Card.Content className='flex-row justify-between'>
      <Text variant="titleLarge">Date </Text>
      <Text variant="bodyMedium">5-2-2025</Text>
    </Card.Content>

  </Card>
  )
}