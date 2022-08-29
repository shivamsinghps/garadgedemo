import { StyleSheet, Pressable, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Block, Input, Text, Button, Icon } from "galio-framework";
import Car from "../components/svg/car";
import Bike from "../components/svg/bike";
import Truck from "../components/svg/truck";

const { width } = Dimensions.get("screen");

export default function Home(props) {
  const { navigation } = props;

  const renderTabs = () => {
    return (
      <Block row style={styles.tabs}>
        <Button
          shadowless
          style={styles.tab}
          onPress={() => navigation.navigate("Greet")}
        >
          <Block row middle>
            <Icon
              size={16}
              name="my-location"
              family="MaterialIcons"
              style={{ paddingRight: 8 }}
            />
            <Text size={16} style={styles.tabTitle}>
              Near Me
            </Text>
          </Block>
        </Button>
        <Button
          shadowless
          style={[styles.tab, styles.divider]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>
              Profile
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };
  const renderSearch = () => {
    return (
      <Input
        right
        style={styles.search}
        color="black"
        family="AntDesign"
        icon="search1"
        placeholder={"How can we help?"}
        placeholderTextColor={"#ccc"}
      />
    );
  };
  return (
    <>
      <ScrollView flex={1}>
        <Block flex={1} space={"around"} center>
          {renderSearch()}
        </Block>
        <Block flex={4} space={"evenly"} center>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            onPress={() =>
              navigation.navigate("Services", {
                title: "Cars",
              })
            }
          >
            <Block
              flex={1}
              space={"evenly"}
              center
              style={styles.imageContainer}
            >
              <Car style={{ height: 200, width: 200 }} />
              <Text p>Cars</Text>
            </Block>
          </Pressable>
        </Block>
        <Block
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            opacity: 0.7,
            marginHorizontal: 100,
          }}
        />
        <Block flex={4} space={"evenly"} center>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            onPress={() =>
              navigation.navigate("Services", {
                title: "Bikes",
              })
            }
          >
            <Block flex space={"evenly"} center style={styles.imageContainer}>
              <Bike style={{ height: 200, width: 200 }} />
              <Text p>Bikes</Text>
            </Block>
          </Pressable>
        </Block>
        <Block
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            opacity: 0.7,
            marginHorizontal: 100,
          }}
        />
        <Block flex={4} space={"evenly"} center>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            onPress={() =>
              navigation.navigate("Services", {
                title: "Vehicles",
              })
            }
          >
            <Block flex space={"evenly"} center style={styles.imageContainer}>
              <Truck style={{ height: 200, width: 200 }} />
              <Text p>Heavy Vehicles</Text>
            </Block>
          </Pressable>
        </Block>
      </ScrollView>
      {renderTabs()}
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: width,
    padding: 20,
  },
  search: {
    height: 48,
    width: "80%",
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 20,
  },
  tabs: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
    backgroundColor: "#ccc",
  },
  tab: {
    backgroundColor: "#ccc",
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: "black",
  },
});
