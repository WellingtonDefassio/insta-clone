import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CommentType } from "../types/Types";

interface CommentsProps {
  comments: CommentType[];
}


export default function Comments(props: CommentsProps) {

  function renderComments() {
    return props.comments.map(renderComment);
  }
  function renderComment(comment: CommentType, index: number) {
    return (
      <View style={styles.commentContainer} key={index}>
        <Text style={styles.nickname}>{comment.nickname}: </Text>
        <Text style={styles.comment}>{comment.comment}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderComments()}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  commentContainer: {
    flexDirection: "row",
    marginTop: 5

  },
  nickname: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#444"
  },
  comment: {
    color: "#555"
  },
});
