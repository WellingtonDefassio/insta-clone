import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import { Gravatar } from "react-native-gravatar";
import { connect } from "react-redux";
import { logoutAction } from "../store/actions/UserAction";

interface ProfileProps {
  navigation: any;
  logOut: () => void;
  onLogOut: any;
  email: string;
}

function Profile(props: ProfileProps) {

  const options = { email: props.email, secure: true };

  function logout() {
    props.onLogOut();
    props.logOut();
  }

  function renderProfile() {

  }


  return (

    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>fulano de tal</Text>
      <Text style={styles.email}>{props.email}</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = ({ user }: { user: any }) => {
  return {
    email: user.email
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => dispatch(logoutAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
