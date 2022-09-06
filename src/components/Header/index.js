import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

export default Header;
