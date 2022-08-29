import React from "react";
import { StyleSheet, Dimensions, ScrollView, Pressable } from "react-native";
import { Button, Block, Text, Input, theme, Icon } from "galio-framework";
const { width } = Dimensions.get("screen");
import CarRepair from "../components/svg/car_repair";
import CarWash from "../components/svg/car_wash";
import CarPaint from "../components/svg/car_paint";
import CarTyre from "../components/svg/car_tyre";
import { useRoute, useNavigation } from "@react-navigation/native";

const Services = (props) => {
  const route = useRoute();
  const title = route.params.title;

  const renderProducts = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: width }}>
        {title != "Bikes" ? (
          <>
            <Pressable
              android_ripple={{ color: "#9C26B0", borderRadius: 8, margin: 20 }}
            >
              <Block
                flex={1}
                row
                center
                space="around"
                style={{
                  backgroundColor: "#DDDDDD",
                  borderRadius: 8,
                  margin: 20,
                }}
              >
                <CarRepair style={styles.serviceImage} />
                <Block center flex>
                  <Text h3>Repair</Text>
                </Block>
              </Block>
            </Pressable>
            <Pressable
              android_ripple={{ color: "#9C26B0", borderRadius: 8, margin: 20 }}
            >
              <Block
                flex={1}
                row
                center
                space="around"
                style={{
                  backgroundColor: "#DDDDDD",
                  borderRadius: 8,
                  margin: 20,
                }}
              >
                <CarWash style={styles.serviceImage} />
                <Block center flex>
                  <Text h3>Wash</Text>
                </Block>
              </Block>
            </Pressable>
          </>
        ) : null}
        <Pressable
          android_ripple={{ color: "#9C26B0", borderRadius: 8, margin: 20 }}
        >
          <Block
            flex={1}
            row
            center
            space="around"
            style={{ backgroundColor: "#DDDDDD", borderRadius: 8, margin: 20 }}
          >
            <CarPaint style={styles.serviceImage} />
            <Block center flex>
              <Text h3>Paint</Text>
            </Block>
          </Block>
        </Pressable>
        <Pressable
          android_ripple={{ color: "#9C26B0", borderRadius: 8, margin: 20 }}
        >
          <Block
            flex={1}
            row
            center
            space="around"
            style={{ backgroundColor: "#DDDDDD", borderRadius: 8, margin: 20 }}
          >
            <CarTyre style={styles.serviceImage} />
            <Block center flex>
              <Text h3>Tyres</Text>
            </Block>
          </Block>
        </Pressable>
      </ScrollView>
    );
  };

  return (
    <Block flex center style={styles.home}>
      {renderProducts()}
    </Block>
  );
};

export default Services;

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  serviceImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
