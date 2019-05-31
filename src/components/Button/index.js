
//@flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  buttonText: string,
  style: Object,
  buttonTextStyle: Object,
};

const Button = (props: Props) => (
  <TouchableOpacity style={props.style} onPress={props.onPress}>
    <Text style={props.buttonTextStyle}>{props.buttonText}</Text>
  </TouchableOpacity>
);

export default Button;