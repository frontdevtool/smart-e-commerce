import { View, Text, FlatList } from "react-native";
import React from "react";
import HomeHeader from "@/components/custom/HomeHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyCart from "./EmptyCart";
import CartItem from "@/components/custom/CartItem";
import TotalView from "@/components/custom/TotalView";
import { products } from "@/data/products";
import { useCartStore } from "@/store/store";

export default function CartScreen() {
    const cart = useCartStore((state) => state.cart)
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
    const increaseQuantity = useCartStore((state) => state.increaseQuantity)
    const removeFromCart = useCartStore((state) => state.removeFromCart)

  return (
    <SafeAreaView className="flex-1 ">
      <View>
        <HomeHeader />
      </View>
      {/* <Text>cart scren</Text> */}
      {
        cart.length > 0 ? (
  <View className="justify-start  h-full p-1">
        {/* <View className="flex-1"> */}

          <FlatList
          
          data={cart}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            // <View className="bg-slate-100 flex-row w-full p-1 h-28 border my-1">
              <CartItem {...item} 
              increaseQuantity={()=>increaseQuantity(item.id)} 
              decreaseQuantity={()=>decreaseQuantity(item.id)}
              removeFromCart={()=>removeFromCart(item.id)}
              /> 
         
            // </View>
          )}
          showsVerticalScrollIndicator ={false}
          />
      

          {/* <CartItem /> 
           <CartItem /> */}
       
         
        {/* </View> */}
        <TotalView itemPrice={5000} orderTotal={5025}/>
      </View>
        ):
        <EmptyCart/>
      }
      
    
    </SafeAreaView>
  );
}
