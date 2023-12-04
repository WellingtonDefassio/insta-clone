import React, { createRef, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LoginType } from "../types/Types";
import Header from "../components/Header";

const initialLoginState: LoginType = {
  email: "",
  password: ""
};

export default function Login(props: any) {

  const [loginState, setLoginState] = useState<LoginType>(initialLoginState);

  const refInput = useRef<any>();

  function login() {
    props.navigation.navigate("Profile");
  }

  function setEmail(email: string) {
    setLoginState({ ...loginState, email });
  }

  function setPassword(password: string) {
    setLoginState({ ...loginState, password });
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Email"}
        style={styles.input}
        autoFocus={true}
        keyboardType={"email-address"}
        value={loginState.email}
        onChangeText={setEmail}
        returnKeyType={'next'}
        onSubmitEditing={() => refInput?.current?.focus()}
        blurOnSubmit={false}
      />
      <TextInput
        placeholder={"Password"}
        style={styles.input}
        secureTextEntry={true}
        value={loginState.password}
        onChangeText={setPassword}
        ref={refInput}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate("Register")
      }} style={styles.button}>
        <Text style={styles.buttonText}>Create Account...</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4"
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF"
  },
  input: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderColor: "#333"
  },

});
