import { StyleSheet } from 'react-native';
import Common from 'src/common/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.redColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Common.whiteColor,
  },
});