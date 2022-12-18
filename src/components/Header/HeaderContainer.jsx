import React from "react";
import { connect } from "react-redux";
import { authUserThunkCreator } from "../../redux/auth_reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser();
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

export default connect(mapStateToProps, {
  authUser: () => authUserThunkCreator(),
})(HeaderContainer);
