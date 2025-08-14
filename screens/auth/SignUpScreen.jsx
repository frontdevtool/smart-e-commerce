import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { images } from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import FormField from "@/components/custom/FormField";
import { Button } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import FlashMessage, {showMessage} from "react-native-flash-message";
const schema = z.object({
  userName: z.string()
  .min(6, "  اسم المستخدم يجب أن تكون 6 أحرف على الأقل"),
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صالح"),
  password: z.string()
  .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

export default function SignUpScreen({ navigation }) {
 const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      userName :"",
      email: "",
      password: "",
    },
  });
const onSubmit = async(data) => {

    try {

      const user = await createUserWithEmailAndPassword(auth ,data.email , data.password )
      Alert.alert("User Created");
      navigation.navigate("MainBottomTab")
   return user.user
      
    }catch(error){
             let errorMessage = ""

        if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use! you can't use this email";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "The email address is invalid.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "The password is too weak.";
        } else {
          errorMessage = "An error occurred during sign-up.";
        }

        showMessage({
          type: "danger",
          message: errorMessage
        })
    }

    
    // console.log("✅ بيانات النموذج:", data);
    // router.push("/home");
  };
  return (
    <SafeAreaView className="flex-1 bg-blue-200 justify-start items-center">
      <Text className="text-2xl font-bold bg-red-300 p border ">
        SignUpScreen{" "}
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
            name="userName"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-6">
                <FormField
                  placeholder="userName"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.userName && (
                  <Text className="text-red-500 mt-1">
                    {errors.userName.message}
                  </Text>
                )}
              </View>
            )}
          />
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
        <Button mode="contained" buttonColor="red" className="my-1 "  onPress={handleSubmit(onSubmit)}>
          create account
        </Button>
        <Button
          mode="contained"
          className="my-5 "
          onPress={() => navigation.navigate("SignInScreen")}
        >
          go to login
        </Button>
      </View>
    </SafeAreaView>
  );
}
