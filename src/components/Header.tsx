import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const icon = "../../assets/imgs/icon.png";


export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={require(icon)} style={styles.image} />
        <Text style={styles.title}>Picture Store</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    width: "100%"
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain"
  },
  title: {
    color: "#000",
    fontFamily: "shelter",
    height: 30,
    fontSize: 28
  }
});
