import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Header from './src/components/Header'

AppRegistry.registerComponent(appName, () => Header);
