import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile_reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    return <Component {...props} params={useParams()} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  redirect = () => {
    let userId = this.props.params.userId || 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  };
  componentDidMount() {
    this.redirect();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isMain !== prevProps.isMain) {
      if (this.props.isMain) {
        this.redirect();
      }
    }
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
