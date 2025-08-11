import { View, Text } from 'react-native'
import React from 'react'
import OrderCard from '@/components/custom/OrderCard'

export default function OrdersScreen() {
return (
<View className='bg-red-300 flex-1 items-center py-4 gap-4'>
    <OrderCard />
    <OrderCard />
    <OrderCard />
</View>
)
}
