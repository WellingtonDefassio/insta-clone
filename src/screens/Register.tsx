import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { RegisterType } from "../types/Types";

const initialStateRegister: RegisterType = {
  email: "",
  password: "",
  name: ""
};

export default function Register() {

  const [registerState, setRegisterState] = useState<RegisterType>(initialStateRegister);

  function setName(name: string) {
    setRegisterState({ ...registerState, name });
  }
  function setPassword(password: string) {
    setRegisterState({ ...registerState, password });
  }
  function setEmail(email: string) {
    setRegisterState({ ...registerState, email });
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Name"}
        style={styles.input}
        autoFocus={true}
        value={registerState.name}
        onChangeText={setName}
      />
      <TextInput
        placeholder={"Email"}
        style={styles.input}
        keyboardType={"email-address"}
        value={registerState.email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder={"Password"}
        style={styles.input}
        secureTextEntry={true}
        value={registerState.password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => {}}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Save</Text>
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
    borderColor: "#333",
    paddingLeft: 15
  },
});
