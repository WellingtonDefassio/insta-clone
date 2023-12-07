import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ImageSourcePropType } from "react-native";
import Author from "./Author";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { CommentType, PostType } from "../types/Types";


export default function Post(props: PostType) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Author email={props.email} nickname={props.nickname}/>
      <Comments comments={props.comments} />
      <AddComment postId={props.id}/>
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
    resizeMode: 'contain'
  }

});
