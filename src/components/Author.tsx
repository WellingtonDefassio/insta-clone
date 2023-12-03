import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
// @ts-ignore
import { Gravatar } from "react-native-gravatar";

interface AuthorProps {
  email: string
  nickname: string
}

export default function Author(props: AuthorProps) {
  return (
    <View style={styles.container}>
      <Gravatar style={styles.avatar} options={{ email: props.email, secure: true }} />
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 15
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
});
