import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CommentType, PostType } from "../types/Types";
import Header from "../components/Header";
import Post from "../components/Post";

const comments: CommentType[] = [
  {
    nickname: "Roger",
    comment: "That is amazing"
  }, {
    nickname: "Maria",
    comment: "That is amazing"
  }, {
    nickname: "Paula",
    comment: "That is amazing"
  }, {
    nickname: "Fabio",
    comment: "That is amazing"
  }, {
    nickname: "Jose",
    comment: "That is amazing"
  }, {
    nickname: "Silvia",
    comment: "That is amazing"
  }
];

const posts: PostType[] = [
  {
    id: Math.random(),
    nickname: "Rafael Pereira",
    email: "rafaelp45487@gmail.com",
    image: require("../../assets/imgs/fence.jpg"),
    comments: comments
  },
  {
    id: Math.random(),
    nickname: "Rafael Pereira",
    email: "rafaelp45487@gmail.com",
    image: require("../../assets/imgs/gate.jpg"),
    comments: []
  },
  {
    id: Math.random(),
    nickname: "Rafael Pereira",
    email: "rafaelp45487@gmail.com",
    image: require("../../assets/imgs/boat.jpg"),
    comments: comments
  }
];

export default function Feed() {

  const [postState, setPostState] = useState<PostType[]>(posts);

  function postRender(post: PostType) {

    return (
      <Post key={post.id} {...post} />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={postState}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => postRender(item)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
