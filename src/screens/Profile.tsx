import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import { Gravatar } from "react-native-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { NameEmailType } from "../types/Types";
import { logoutAction } from "../store/slices/UserSlice";

interface ProfileProps {
  navigation: any;
  logOut: () => void;
  onLogout: any;
  email: string;
}

export default function Profile(props: ProfileProps) {

  console.log(props);

  const user = useSelector(({ user }): NameEmailType => user);
  const dispatch = useDispatch();

  const options = { email: props.email, secure: true };

  function logout() {
    dispatch(logoutAction());
    props.logOut();
  }

  function renderProfile() {

  }


  return (

    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
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
