import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";

export const DEFAULT_ACTIVE_OPACITY = 0.85;

export const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.00,
  elevation: 2,
};

export const alignItemsMap = {
  center: "center",
  topLeft: "flex-start",
  topRight: "flex-end",
  bottomLeft: "flex-start",
  bottomRight: "flex-end"
};

export const isAndroid = Platform.OS === "android";

export function getTouchableComponent(useNativeFeedback) {
  if (useNativeFeedback === true && isAndroid === true) {
    return TouchableNativeFeedback;
  }
  return TouchableOpacity;
}

export function touchableBackground(color, fixRadius) {
  if (isAndroid) {
    if (Platform["Version"] >= 21) {
      return TouchableNativeFeedback.Ripple(
        color || "rgba(255,255,255,0.75)",
        fixRadius
      );
    } else {
      TouchableNativeFeedback.SelectableBackground();
    }
  }
  return undefined;
}
