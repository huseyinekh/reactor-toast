import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface IProps{
    text?:string
}
const Interactive = (props:IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Interactive TEST PACKAGE {props.text??"NO TEXT"}</Text>
    </View>
  );
};

export default Interactive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});
