//@flow
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => (
  <TouchableOpacity style={props.style} onPress={props.onPress}>
    <Text style={props.buttonTextStyle}>{props.buttonText}</Text>
  </TouchableOpacity>
);

export default Button;
