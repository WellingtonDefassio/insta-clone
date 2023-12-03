import React from "react";
import { View, Text } from "react-native";
import Header from "./Header";
import Post from "./Post";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Post image={require("../../assets/imgs/fence.jpg")}/>
    </View>
  );
}
