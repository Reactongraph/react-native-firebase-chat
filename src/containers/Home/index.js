import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from 'src/components/Header';
import Button from 'src/components/Button';
import  Helper from 'src/common/helper';

import styles from './styles';

const helperFunctions = new Helper();

class Main extends React.Component {
  state = {
    name: '',
  };

  handleJoinChat = () => {
    const { name } = this.state;
    if(name.length > 4) {
      helperFunctions.resetNavigation(this, 'Chat', { name: this.state.name });
    } else {
      alert("Username should be at least 5 characters")
    }
  }

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Header title="Join Group"/>
        </View>
        <View style={styles.bodyView}>
          <Text style={styles.title}>Enter your name:</Text>
          <TextInput
            onChangeText={this.onChangeText}
            value={this.state.name}
            placeholder = "Enter Your Name"
            style={styles.nameInput}
            underlineColorAndroid='transparent'
          />
          <Button
            buttonText="Join Group"
            onPress={this.handleJoinChat}
            style={styles.buttonView}
            buttonTextStyle={styles.buttonText}
          />
        </View>
      </View>
    );
  }
}

export default Main;
