import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MenuButton from "../components/Buttons/Menu";
import { colors } from "../styles/colors";
import SettingScreen from "../screens/SettingScreen";
import PurchasesScreen from "../screens/PurchasesScreen";
import ExploreScreen from "../screens/ExploreScreen";
import HomeIcon from "../assets/icons/Home";
import ExploreIcon from "../assets/icons/Explore";
import PurchasesIcon from "../assets/icons/Purchases";
import SettingsIcon from "../assets/icons/Settings";
import ProductScreen from "../screens/ProductScreen";
import Back from "../assets/icons/Back";
import { useNavigation } from "@react-navigation/native";
import Configs from "../assets/icons/Configs";
import { RootStackParamList } from "../utils/navigationTypes";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();
const Avatar = require("../assets/icons/avatar.jpg");

const Tabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.white,
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: colors.orange,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <HomeIcon width={24} height={24} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Purchases"
      component={PurchasesScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <PurchasesIcon width={24} height={24} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <ExploreIcon width={24} height={24} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <SettingsIcon width={24} height={24} focused={focused} />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootNavigator: React.FC = () => {
  const navigation = useNavigation();
  
  const handlePressConfig = () => {};
  const handlePressMenu = () => {};
  const handlePressBack = () => navigation.goBack();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Tabs}
        options={{
          headerLeft: () => (
            <MenuButton onPress={handlePressMenu} customStyle={styles.menu_button} />
          ),
          headerRight: () => (
            <Image source={Avatar} style={styles.config_button} />
          ),
          headerTitleStyle: { display: "none" },
          headerStyle: { backgroundColor: colors.background },
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={handlePressBack}
              style={styles.headerIcon}
            >
              <Back />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handlePressConfig} style={styles.headerIcon}>
              <Configs />
            </TouchableOpacity>
          ),
          headerTitle: "Detail",
          headerStyle: { backgroundColor: colors.background },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  menu_button: {
    marginLeft: 16,
    backgroundColor: colors.white,
    padding: 6,
    borderRadius: 12,
  },
  headerIcon: {
    marginHorizontal: 32,
  },
  config_button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
});

export default RootNavigator;
