import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Divider } from 'react-native-paper'

export default function ProfileSectionButton({title , onPress}) {
  return (
       <View className=' m-2'>

        <TouchableOpacity className='flex-row justify-between p-5 ' onPress={onPress}>
          <View>
            <Text> {title} </Text>
          </View>
          <View>
          <FontAwesome name='arrow-right'/>
          </View>
        </TouchableOpacity>
        <Divider/>
      </View>
  )
}