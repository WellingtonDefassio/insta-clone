import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Author from "./Author";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { PostType } from "../types/Types";
import { selectName } from "../store/slices/UserSlice";
import { useAppSelector } from "../store/hooks";


export default function Post(props: PostType) {

  let name = useAppSelector(selectName);

  function showAddComment() {
    return (
      name ? <AddComment postId={props.id} /> : null
    );
  }

  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Author email={props.email} nickname={props.nickname} />
      <Comments comments={props.comments} />
      {showAddComment()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * 3 / 4,
    resizeMode: "contain"
  }

});
