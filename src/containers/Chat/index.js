// @flow
import React from 'react';
import { View } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

import FirebaseSDK from 'src/config/firebaseSDK';
import Header from 'src/components/Header';

import styles from './styles'

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: FirebaseSDK.shared.uid,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Header title="Group Chat"/>
        </View>
        <View style={styles.bodyView}>
          <GiftedChat
            messages={this.state.messages}
            onSend={FirebaseSDK.shared.send}
            user={this.user}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    FirebaseSDK.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    FirebaseSDK.shared.off();
  }
}

export default Chat;
