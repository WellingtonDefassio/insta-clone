import "react-native-gesture-handler";
import { React } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import Navigator from "./src/Navigator";
import { store } from "./src/store/store";

import axios from  "axios";
axios.defaults.baseURL = "https://inst-8edf3-default-rtdb.firebaseio.com/"

function Redux() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Redux);
