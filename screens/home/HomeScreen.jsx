import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/custom/HomeHeader";
import ProductCart from "@/components/custom/ProductCart";
import { products } from "@/data/products";
import store from '../../store/store.js'
export default function HomeScreen() {
  const items = store((state) => state.items)
  const addItemToCart = store((state) => state.addItemToCart)
  console.log('items: ', items);
  const handlecard=(item)=>{
    console.log('item: ', item);
      // addItemToCart(item)
  }
  return (
    <SafeAreaView className="flex-1 
    ">
      <HomeHeader />
      {/* <Text>HomeScreen</Text> */}
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="  ">
            <ProductCart
              title={item.title}
              price={item.price}
              imageUrl={item.imageURL}
              // onPress={()=>handlecard(item)}
              onPress={()=>addItemToCart(item)}
            />
          </View>
        )}
        columnWrapperStyle={{
          justifyContent : 'space-around',
          marginBottom : 10,
          paddingHorizontal : 5,
          
          
        }}
      />
    </SafeAreaView>
  );
}
