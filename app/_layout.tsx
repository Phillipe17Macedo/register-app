import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#173540",
          borderTopWidth: 0,
          position: "absolute",
          bottom: 15,
          height: 70,
          width: '90%',
          alignSelf: 'center',
          left: 18,
          right: 15,
          borderRadius: 20
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <FontAwesome name="home" size={35} color={'#DAFDBA'} />;
            }
            return <FontAwesome name="home" size={35} color={'#9AEBA3'} />;
          }
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome name="list-alt" size={35} color={'#DAFDBA'} />;
            }

            return <FontAwesome name="list-alt" size={35} color={'#9AEBA3'} />;
          },
        }}
      />
    </Tabs>
  );
}
