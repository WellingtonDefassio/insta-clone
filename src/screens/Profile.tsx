import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// @ts-ignore
import { Gravatar } from "react-native-gravatar";
import Header from "../components/Header";

interface ProfileProps {
  navigation: any;
  logOut: () => void
}

export default function Profile(props: ProfileProps) {

  const options = { email: "fulanodetal@gmail.com", secure: true };

  function logout() {
    props.logOut();
  }

  function renderProfile() {

  }


  return (

    <View style={styles.container}>
      <Header />
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>fulano de tal</Text>
      <Text style={styles.email}>fulanodetal@gmail.com</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold"
  },
  email: {
    marginTop: 20,
    fontSize: 25
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4"
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF"
  }
});
