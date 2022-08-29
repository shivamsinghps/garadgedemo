import React from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import materialTheme from "../constants/Theme";
import Images from "../constants/Image";

const Onboarding = (props) => {
  const { navigation } = props;

  return (
    <Block flex style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Block flex center>
        <ImageBackground
          source={{ uri: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80" }}
          style={{ height: height, width: width, marginTop: 1, zIndex: 1 }}
        />
      </Block>
      <Block flex  style={styles.padded}>
        <Block flex  style={{ zIndex: 2,marginTop:"-10%" }}>
          <Block>
            <Block>
              <Text color="white" size={50}>
                Ready For
              </Text>
            </Block>
            <Block row>
              <Text color="white" size={50}>
                Hassel Free Weekend
              </Text>
            </Block>
            <Text style={{paddingLeft:120,paddingTop:10}} size={30} color="white">
              Let us do the work.
            </Text>
          </Block>
          <Block center>
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={() => navigation.navigate("Greet")}
            >
              Meet Us
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
