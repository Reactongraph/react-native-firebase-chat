import { StyleSheet } from 'react-native';
import Common from 'src/common';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginTop: Common.offset,
    marginLeft: Common.offset,
    fontSize: 20,
  },
  headerView: {
    height: 60,
  },
  bodyView: {
    flex: 12,
  },
  nameInput: {
    height: Common.offset * 2,
    margin: Common.offset,
    paddingHorizontal: Common.offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    color: Common.whiteColor,
  },
  buttonView: {
    padding: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Common.redColor,
  },
});