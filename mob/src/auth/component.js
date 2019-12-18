import React, {Component} from 'react';
import {Button, View, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {getUserName, getPassword} from './selectors';
import {signUp, signIn} from './duck';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', password: ''};
  }

  render() {
    const {userName, password} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          value={userName}
          placeholder="user Name"
          onChangeText={text => {
            this.setState({userName: text});
          }}
          underlineColorAndroid={'black'}
        />
        <TextInput
          value={password}
          placeholder="password"
          onChangeText={text => {
            this.setState({password: text});
          }}
          underlineColorAndroid={'black'}
        />
        <Button
          title="signIn"
          onPress={() => {
            this.props.signIn({userName, password});
          }}
        />
        <Button
          title="signUp"
          onPress={() => {
            this.props.signUp({userName, password});
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userName: getUserName(state),
  Password: getPassword(state),
});

const mapDispatchToProps = dispatch => ({
  signIn: ({userName, password}) => {
    dispatch(signIn({userName, password}));
  },
  signUp: ({userName, password}) => {
    dispatch(signUp({userName, password}));
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Auth);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around', alignItems: 'center'},
});
