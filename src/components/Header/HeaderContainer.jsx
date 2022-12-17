import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../api/api";
import { setAuthUserData } from "../../redux/auth_reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    getAuth().then((response) => {
      if (!response.resultCode) {
        let { email, id, login } = response.data;
        this.props.setAuthUserData(email, id, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
