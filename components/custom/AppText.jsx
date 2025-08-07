import { View, Text } from 'react-native'
import React from 'react'
// import {s}from 'react-native-size-matters'
export default function AppText({children , otherStyle , ...rest}) {
    // console.log('s: ', s(20));
    return (
   
      <Text  {...rest} className={` ${otherStyle} `}>{children}</Text>

  )
}