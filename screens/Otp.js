import { View, StyleSheet } from "react-native";
import React from "react";
import { Input, Block } from "galio-framework";
import { Text } from "galio-framework";
import { Button } from "galio-framework";
import { useForm, useController } from "react-hook-form";

const InputData = ({ name, control, placeholder, icon }) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={"#ccc"}
      family="AntDesign"
      value={field.value}
      onChangeText={field.onChange}
      icon={icon}
    />
  );
};
export default function Otp({ navigation }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <Block center={true} style={styles.inputBlock}>
        <Text h6>Enter the Phone OTP</Text>
        <InputData
          placeholder="OTP"
          icon="key"
          name="key"
          control={control}
          password={true}
        />
      </Block>
      <Block center={true} style={styles.inputBlock}>
        <Text h6>Enter the Email OTP</Text>
        <InputData
          placeholder="OTP"
          icon="key"
          name="key"
          control={control}
          password={true}
        />
      </Block>

      <Button
        round
        disabled={false}
        uppercase
        color="red"
        onPress={handleSubmit(onSubmit)}
      >
        Verify
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBlock: {
    width: "70%",
    marginTop: 50,
  },
  socialBlock: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleIcon: {
    margin: 10,
  },
  socialButtons: { width: 40, height: 40, marginHorizontal: 15, marginTop: 15 },
});
