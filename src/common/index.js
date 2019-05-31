import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const offset = 24;

module.exports = {
  // device dimensions
  deviceHeight,
  deviceWidth,
  offset,

  // defines colors
  redColor: '#f4511e',
  whiteColor: '#ffffff',
  blackColor: '#000000',
};