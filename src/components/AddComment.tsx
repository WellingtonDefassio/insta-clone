import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TextInput, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddComment() {

  const [commentState, setCommentState] = useState("");
  const [editModeState, setEditModeState] = useState(false);

  function handleAddComment() {
    Alert.alert("Add", commentState);
  }

  function editModeRender() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={"comment...."}
          style={styles.input} autoFocus={true}
          value={commentState}
          onChangeText={setCommentState}
          onSubmitEditing={handleAddComment}
        />
        <TouchableWithoutFeedback onPress={() => setEditModeState(false)}>
          <Icon name={"times"} size={15} color={"#555"} />
        </TouchableWithoutFeedback>
      </View>
    );
  }

  function createModeRender() {
    return (
      <TouchableWithoutFeedback onPress={() => setEditModeState(true)}>
        <View style={styles.container}>
          <Icon name={"comment-o"} size={25} color={"#555"} />
          <Text style={styles.caption}>Add a comment...</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {editModeState ? editModeRender() : createModeRender()}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: "#CCC"
  },
  input: {
    width: "90%"
  }
});











