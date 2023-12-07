import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { NameEmailType } from "../types/Types";
// @ts-ignore
import { Gravatar } from "react-native-gravatar";
import { useAppSelector } from "../store/hooks";

const icon = "../../assets/imgs/icon.png";


export default function Header() {

  let user = useAppSelector(({ user }): NameEmailType => user);
  const name = user.name === "" ? "Anonymous" : user.name;

  function renderGravatar() {
    return user.email ?
      <Gravatar options={{ email: user.email, secure: true }} style={styles.avatar} /> : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={require(icon)} style={styles.image} />
        <Text style={styles.title}>Picture Store</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.userName}>{name}</Text>
        {renderGravatar()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center"
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
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  userName: {
    fontSize: 10,
    color: "#888"
  },

});
