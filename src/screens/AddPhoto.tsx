import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { ImagePickerType } from "../types/Types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addPostAction, addPostFirebase } from "../store/slices/PostSlice";


const initialImageState: ImagePickerType = {
  base64: "",
  uri: ""
};


export default function AddPhoto(props: any) {

  const [imageState, setImageState] = useState(initialImageState);
  const [commentState, setCommentState] = useState("");
  let user = useAppSelector((props) => props.user);
  let dispatch = useAppDispatch();


  const noUser = "You need be logged to add a image";

  async function takePicture() {
    if (user.name == null) {
      Alert.alert("Fail", noUser);
      return;
    }
    let imagePickerResponse = await launchCamera({
      mediaType: "photo",
      maxHeight: 600,
      maxWidth: 800,
      includeBase64: true
    });
    if (imagePickerResponse.assets?.length) {
      let assets = imagePickerResponse.assets[0];
      setImageState({ uri: assets.uri as string, base64: assets.base64 as string });
    }
  }

  async function takeAlbum() {
    if (user.name == null) {
      Alert.alert("Fail", noUser);
      return;
    }
    let imagePickerResponse = await launchImageLibrary({
      mediaType: "photo",
      maxHeight: 600,
      maxWidth: 800,
      includeBase64: true
    });
    if (imagePickerResponse.assets?.length) {
      let assets = imagePickerResponse.assets[0];
      setImageState({ uri: assets.uri as string, base64: assets.base64 as string });
    }
  }


  function textRender(text: string) {
    setCommentState(text);
  }

  async function saveImage() {
    if (user.name == null) {
      Alert.alert("Fail", noUser);
      return;
    }

    dispatch(addPostAction([
      {
        id: Math.random(),
        nickname: user.name as string,
        email: user.email,
        image: imageState,
        comments: [{
          nickname: user.name as string,
          comment: commentState
        }]
      }
    ]));
    dispatch(addPostFirebase({
      id: Math.random(),
      nickname: user.name as string,
      email: user.email,
      image: imageState,
      comments: [{
        nickname: user.name as string,
        comment: commentState
      }]
    }));
    setImageState(initialImageState);
    setCommentState("");
    props.navigation.navigate("Feed");
  }

  return (

    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Share one image</Text>
        <View style={styles.imageContainer}>
          <Image source={imageState.uri == "" ? require("../../assets/imgs/empty.png") : imageState}
                 style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePicture} style={styles.button}>
            <Text style={styles.buttonText}>Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takeAlbum} style={styles.button}>
            <Text style={styles.buttonText}>Album</Text>
          </TouchableOpacity>
        </View>
        <TextInput editable={!!user.name} placeholder={"Add a comment to photo"} style={styles.input}
                   value={commentState}
                   onChangeText={textRender} />
        <TouchableOpacity onPress={saveImage} style={styles.buttonSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginTop: 10
  },
  imageContainer: {
    width: "90%",
    height: Dimensions.get("window").width,
    backgroundColor: "#EEE",
    marginTop: 10
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4",
    marginRight: 5
  },
  buttonSave: {
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
    backgroundColor: "#d4d4d4",
    borderColor: "black",
    borderWidth: 1
  }
});
