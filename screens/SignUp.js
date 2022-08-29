import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Input, Block } from "galio-framework";
import { Icon } from "galio-framework";
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
export default function SignUp({ navigation }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("OTP");
  };
  return (
    <View style={styles.container}>
      <Block center={true} style={styles.inputBlock}>
        <Icon
          family="AntDesign"
          name="adduser"
          size={50}
          style={styles.titleIcon}
        />
        <InputData
          placeholder="Name"
          icon="tago"
          name="tago"
          control={control}
          password={true}
        />
        <InputData
          placeholder="Email"
          icon="user"
          name="username"
          control={control}
        />
        <InputData
          placeholder="Phone"
          icon="phone"
          name="phone"
          control={control}
          password={true}
        />

        <Button
          round
          disabled={false}
          uppercase
          color="red"
          onPress={handleSubmit(onSubmit)}
        >
          Let's GO
        </Button>
      </Block>
      <Block center={true}>
        <Icon name="more-horizontal" family="Feather" size={50} />
      </Block>

      <Block style={styles.socialBlock}>
        <Button
          onlyIcon
          icon="google"
          iconFamily="AntDesign"
          iconSize={30}
          color="#B22727"
          iconColor="#fff"
          style={styles.socialButtons}
        >
          warning
        </Button>
        <Button
          onlyIcon
          icon="facebook-with-circle"
          iconFamily="Entypo"
          iconSize={30}
          color="#2155CD"
          iconColor="#fff"
          style={styles.socialButtons}
        >
          warning
        </Button>
      </Block>
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
