import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import FormField from "@/components/custom/FormField";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
const schema = z.object({
  fullName: z.string()
  .min(6, "  اسم المستخدم يجب أن تكون 6 أحرف على الأقل"),
  adress: z.string()
  .min(10, "  العنوان يجب أن تكون 10أحرف على الأقل"),
  number:  z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long")
    .regex(/^[0-9+]+$/, "Invalid phone number (only numbers and + allowed)"),


});

export default function CheckoutScreen() {

const onSubmit = async(data) => {
  console.log('data: ', data);

    try {

  //     const user = await createUserWithEmailAndPassword(auth ,data.email , data.password )
  //     Alert.alert("User Created");
  //     navigation.navigate("MainBottomTab")
  //  return user.user
      
    }catch(error){
            //  let errorMessage = ""

        // if (error.code === "auth/email-already-in-use") {
        //   errorMessage = "This email is already in use! you can't use this email";
        // } else if (error.code === "auth/invalid-email") {
        //   errorMessage = "The email address is invalid.";
        // } else if (error.code === "auth/weak-password") {
        //   errorMessage = "The password is too weak.";
        // } else {
        //   errorMessage = "An error occurred during sign-up.";
        // }

        showMessage({
          type: "danger",
          message: errorMessage
        })
    }

    
    // console.log("✅ بيانات النموذج:", data);
    // router.push("/home");
  };

   const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        fullName :"",
        adress: "",
        number: "+963",
      },
    });
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={100}
     behavior="padding"
      className="p-5 flex-1 justify-around"
     >
      <View className="gap-5 ">
 <Controller
            control={control}
            name="fullName"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-6">
                <FormField
                label={"full name"}
                  // placeholder="full name"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.fullName && (
                  <Text className="text-red-500 mt-1">
                    {errors.fullName.message}
                  </Text>
                )}
              </View>
            )}
          />  
       <Controller
            control={control}
            name="adress"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-6">
                <FormField
                label={"adress"}
                  // placeholder="full name"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.adress && (
                  <Text className="text-red-500 mt-1">
                    {errors.adress.message}
                  </Text>
                )}
              </View>
            )}
          />  
       <Controller
            control={control}
            name="number"
            render={({ field: { value, onChange, onBlur } }) => (
              <View className="mb-6">
                <FormField
                label={"number"}
                  // placeholder="full name"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.number && (
                  <Text className="text-red-500 mt-1">
                    {errors.number.message}
                  </Text>
                )}
              </View>
            )}
          />  
      </View>

        <Button mode="contained" onPress={handleSubmit(onSubmit)}>confirm</Button>
    </KeyboardAvoidingView>
  );
}
