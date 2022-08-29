import React from "react";
import { Easing, Animated, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Images, materialTheme } from "../constants/";

import { Icon, Header } from "../components";

import OnboardingScreen from "../screens/OnBoardingScreen";
import ProScreen from "../screens/Pro";
import Signin from "../screens/Signin";
import Profile from "../screens/Profile";
import SignUp from "../screens/SignUp";
import Otp from "../screens/Otp";
import Home from "../screens/Home";
import Services from "../screens/Services";

const { width } = Dimensions.get("screen");

const profile = {
  avatar: Images.Profile,
  name: "Rachel Brown",
  type: "Seller",
  plan: "Pro",
  rating: 4.8,
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Signup(props) {
  return (
    <Stack.Navigator
      mode="card"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitleAlign: "center",
          title: "Welcome Aboard",
        }}
      />
      <Stack.Screen
        name="OTP"
        component={Otp}
        options={{
          headerTitleAlign: "center",
          title: "Verify OTP",
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="SignIn"
        component={Signin}
        options={{
          headerTitleAlign: "center",
          title: "Let's Start",
        }}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: "center",
          title: "Welcome Aboard",
        }}
        name="Sign"
        component={Signup}
      />
    </Tab.Navigator>
  );
}

function Main(props) {
  return (
    <Stack.Navigator
      mode="card"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      mode="card"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Greet" component={ProScreen} />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
