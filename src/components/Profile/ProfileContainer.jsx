import React from "react";
import { connect } from "react-redux";
import { getProfileThunkCreator } from "../../redux/profile_reducer";
import Profile from "./Profile";
import { Navigate, useParams } from "react-router-dom";


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    return <Component {...props} params={useParams()} />;
  }

  return ComponentWithRouterProp;
}



class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isMain !== prevProps.isMain) {
      if (this.props.isMain) {
        this.props.getProfile(this.props.params.userId);
      }
    }
  }
  render() {
    if (!this.props.isAuth) {
      return <Navigate to={"/login/"} />;
    }

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}



const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth : state.auth.isAuth
});

export default connect(mapStateToProps, {
  getProfile: (newUserId) => getProfileThunkCreator(newUserId),
})(withRouter(ProfileContainer));
