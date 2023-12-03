import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

export default function Post(props: any) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
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
