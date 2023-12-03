import React from "react";
import { View, Text } from "react-native";
import Header from "./Header";
import Post from "./Post";
import { Comment } from "../types/Types";

export default function Home() {

  const comments: Comment[] = [
    {
      nickname: "Roger",
      comment: "That is amazing"
    },{
      nickname: "Maria",
      comment: "That is amazing"
    },{
      nickname: "Paula",
      comment: "That is amazing"
    },{
      nickname: "Fabio",
      comment: "That is amazing"
    },{
      nickname: "Jose",
      comment: "That is amazing"
    }, {
      nickname: "Silvia",
      comment: "That is amazing"
    }
  ];


  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Post image={require("../../assets/imgs/fence.jpg")} comments={comments} />
    </View>
  );
}
