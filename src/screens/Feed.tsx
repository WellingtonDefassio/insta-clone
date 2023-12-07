import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CommentType, PostType } from "../types/Types";
import Post from "../components/Post";
import { useAppSelector } from "../store/hooks";
import { selectedPosts } from "../store/slices/PostSlice";


export default function Feed() {

  let postsSelector = useAppSelector(selectedPosts);

  function postRender(post: PostType) {

    return (
      <Post key={post.id} {...post} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={postsSelector}
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
