import "react-native-gesture-handler";
import { React } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import Navigator from "./src/Navigator";
import storeConfig from "./src/store/storeConfig";

const store = storeConfig();

function Redux() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Redux);
