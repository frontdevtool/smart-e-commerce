import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/custom/HomeHeader";
import ProductCart from "@/components/custom/ProductCart";
import { products } from "@/data/products";
import {useCartStore} from "@/store/store";
export default function HomeScreen() {
  // const cart = useCartStore((state) => state.cart)
  const addToCart = useCartStore((state) => state.addToCart)

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
              onPress={()=>addToCart(item)}
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
