import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Feed from "./src/screens/Feed";
import Navigator from "./src/Navigator";
import AddPhoto from "./src/screens/AddPhoto";
import Profile from "./src/screens/Profile";

AppRegistry.registerComponent(appName, () => Navigator);
