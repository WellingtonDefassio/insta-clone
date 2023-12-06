import "react-native-gesture-handler";
import { React } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import Navigator from "./src/Navigator";
import store from "./src/store/store";


function Redux() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Redux);
