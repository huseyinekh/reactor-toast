import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ToastProps } from "../../interface/ToastProps";

const Toast: React.FC<ToastProps> = ({
  visible,
  type,
  title,
  description,
  position,
  onClose,
  textStyle,
  descriptionStyle, 
  style
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        if (!visible) onClose && onClose();
      });
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          opacity: fadeAnim,
          bottom: position === "bottom" ? 20 : undefined,
          top: position === "top" ? 20 : undefined,
        },
        getToastStyle(type),
        style
      ]}
    >
      <TouchableOpacity onPress={onClose} style={styles.toastContent}>
        <Text style={[styles.title, textStyle]}>{title}</Text>
        <Text style={[styles.description, descriptionStyle]}>{description}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const getToastStyle = (type: ToastProps["type"]): ViewStyle => {
  switch (type) {
    case "error":
      return styles.error;
    case "success":
      return styles.success;
    case "warning":
      return styles.warning;
    case "info":
      return styles.info;
    case "primary":
      return styles.primary;
    default:
      return styles.default;
  }
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    left: "0%",
    right: "0%",
    backgroundColor: "black",
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 10,
  } as ViewStyle,
  toastContent: {
    flexDirection: "column",
  } as ViewStyle,
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  } as TextStyle,
  description: {
    color: "white",
    fontSize: 14,
  } as TextStyle,
  error: {
    backgroundColor: "red",
  } as ViewStyle,
  success: {
    backgroundColor: "green",
  } as ViewStyle,
  warning: {
    backgroundColor: "orange",
  } as ViewStyle,
  info: {
    backgroundColor: "blue",
  } as ViewStyle,
  primary: {
    backgroundColor: "purple",
  } as ViewStyle,
  default: {
    backgroundColor: "black",
  } as ViewStyle,
});

export default Toast;
