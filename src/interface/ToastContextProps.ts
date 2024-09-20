import { TextStyle, ViewStyle } from "react-native";

interface ToastContextProps {
    textStyle?: TextStyle;
    descriptionStyle?: TextStyle;
    style?: ViewStyle;
    toastStyles: {
      primary: ViewStyle;
      error: ViewStyle;
      success: ViewStyle;
      info: ViewStyle;
      warning: ViewStyle;
    };
  }

  export default ToastContextProps