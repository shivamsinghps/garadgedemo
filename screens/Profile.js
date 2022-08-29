import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Pressable,
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import { LinearGradient } from "expo-linear-gradient";

import materialTheme from "../constants/Theme";

import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

export default function Profile({ navigation }) {
  const Images = [];
  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1534637950656-9e6753b6da6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          }}
          style={styles.profileContainer}
          imageStyle={styles.profileImage}
        >
          <Block flex style={styles.profileDetails}>
            <Block style={styles.profileTexts}>
              <Text color="white" size={28} style={{ paddingBottom: 8 }}>
                Star Repairs
              </Text>
              <Block row space="between">
                <Block row>
                  <Block center style={styles.pro}>
                    <Text size={14} color="white">
                      3
                    </Text>
                  </Block>
                  <Text color="white" size={16} muted style={styles.seller}>
                    Repairs
                  </Text>
                  <Text size={16} color={materialTheme.COLORS.WARNING}></Text>
                </Block>
                <Block>
                  <Text color={theme.COLORS.MUTED} size={16}>
                    Bopodi, Pune
                  </Text>
                </Block>
              </Block>
            </Block>
            <LinearGradient
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
              style={styles.gradient}
            />
          </Block>
        </ImageBackground>
      </Block>
      <Block flex style={styles.options}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block row space="between" style={{ padding: 5 }}>
            <Pressable android_ripple={{ color: "primary" }}>
              <Block middle style={{ height: 60, width: 80 }}>
                <Icon
                  name="directions"
                  family="MaterialIcons"
                  size={16}
                  style={{ marginBottom: 8 }}
                />
                <Text muted size={12}>
                  Direction
                </Text>
              </Block>
            </Pressable>
            <Pressable android_ripple={{ color: "primary" }}>
              <Block middle style={{ height: 60, width: 80 }}>
                <Icon
                  name="star"
                  family="AntDesign"
                  size={16}
                  style={{ marginBottom: 8 }}
                />
                <Text muted size={12}>
                  Reviews
                </Text>
              </Block>
            </Pressable>
            <Pressable android_ripple={{ color: "primary" }}>
              <Block middle style={{ height: 60, width: 80 }}>
                <Icon
                  name="message"
                  family="Entypo"
                  size={16}
                  style={{ marginBottom: 8 }}
                />
                <Text muted size={12}>
                  Chat
                </Text>
              </Block>
            </Pressable>
          </Block>
          <Block
            row
            space="between"
            style={{ paddingVertical: 16, alignItems: "baseline" }}
          >
            <Text size={16}>Recent Records</Text>
            <Text size={12} color={theme.COLORS.PRIMARY}>
              View All
            </Text>
          </Block>
          <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
            <Block row space="between" style={{ flexWrap: "wrap" }}>
              {Images.length > 0 ? (
                Images.Viewed.map((img, imgIndex) => (
                  <Image
                    source={{ uri: img }}
                    key={`viewed-${img}`}
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                ))
              ) : (<>
              <Text h1>ujdjd</Text>
                <Image
                  source={{ uri: "https://reactnative-examples.com/wp-content/uploads/2022/02/error-image.png" }}
                  resizeMode="center"
                />
                </>
              )}
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: "auto",
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: "flex-end",
    position: "relative",
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2,
  },
  pro: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    position: "absolute",
  },
});
