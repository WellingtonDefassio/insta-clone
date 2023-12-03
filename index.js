import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Header from './src/components/Header'
import Post from "./src/components/Post";
import Home from "./src/components/Home";
import AddComment from "./src/components/AddComment";

AppRegistry.registerComponent(appName, () => Home);
