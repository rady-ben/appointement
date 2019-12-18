import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserName, getPassword } from "./selectors";
import { signUp, signIn } from "./duck";
import "./style.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };
  }

  render() {
    const { userName, password } = this.state;
    return (
      <div style={container}>
        <input
          style={element}
          value={userName}
          placeholder="user Name"
          onChange={event => {
            this.setState({ userName: event.target.value });
          }}
        />
        <input
          style={element}
          value={password}
          placeholder="password"
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
        <button
          style={element}
          onClick={() => {
            this.props.signIn({ userName, password });
          }}
        >
          signIn
        </button>
        <button
          style={element}
          onClick={() => {
            this.props.signUp({ userName, password });
          }}
        >
          signUp
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: getUserName(state),
  Password: getPassword(state)
});

const mapDispatchToProps = dispatch => ({
  signIn: ({ userName, password }) => {
    dispatch(signIn({ userName, password }));
  },
  signUp: ({ userName, password }) => {
    dispatch(signUp({ userName, password }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const element = {
  margin: "20px"
};
