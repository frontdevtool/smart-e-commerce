import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import FormField from "@/components/custom/FormField";
import { Button } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebaseConfig';
import  FlashMessage, {showMessage} from 'react-native-flash-message'
const schema = z.object({
  email: z
    .string(),
    // .min(1, "البريد الإلكتروني مطلوب")
    // .email("البريد الإلكتروني غير صالح"),
  password: z.string(),
  // .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

export default function SignInScreen({ navigation }) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

   const onSubmit = async(data) => {
    console.log('data: ', data);

    try {

      const user = await signInWithEmailAndPassword(auth ,data.email , data.password )
      navigation.navigate("MainBottomTab")
      console.log('user: ', user);
      
    }catch(error){
      let errorMessage = ""
      console.log(error.code)
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found"
      } else if ( error.code === "auth/invalid-credential" ) {
        errorMessage = "Wrong email or password"
      } else {
        errorMessage = "An error occurred during sign-in"
      }

      showMessage({
        type: "danger",
        message: errorMessage
      })

    }
    
  };
  return (
    <SafeAreaView className="flex-1 bg-sky-700 justify-start items-center">
      <Text className="text-2xl font-bold bg-red-300 p border ">
        SingInScreenzzz{" "}
      </Text>
         <FlashMessage position="top" />
      <Image
        source={images.appLogo}
        className=" mb-5 "
        style={{ width: 200, height: 200 }}
      />
      <View className=" w-full p-4">
            <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-4">
                <FormField
                  placeholder="Email"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.email && (
                  <Text className="text-red-500 mt-1">
                    {errors.email.message}
                  </Text>
                )}
              </View>
            )}
          />
        <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-6">
                <FormField
                  placeholder="password"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.password && (
                  <Text className="text-red-500 mt-1">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            )}
          />
        <Button mode="contained" className="my-5 " onPress={handleSubmit(onSubmit)}>
          login
        </Button>
        <Button
          mode="contained"
          className="my-1 "
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          signup
        </Button>
      </View>
    </SafeAreaView>
  );
}
