import { TextStyle, ViewStyle } from "react-native";

export interface ToastProps {
  type: "error" | "success" | "warning" | "info" | "primary";
  position: "top" | "bottom";
  descriptionStyle?: TextStyle;
  textStyle?: TextStyle;
  onClose?: () => void;
  description?: string;
  autoHide?: boolean;
  duration?: number;
  style?: ViewStyle;
  visible?: boolean;
  id?: number;
  title: string;
}
