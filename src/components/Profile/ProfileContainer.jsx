import React from "react";
import { connect } from "react-redux";
import {
  getProfileThunkCreator,
  getStatus,
  updateStatus,
} from "../../redux/profile_reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/hoc";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    return <Component {...props} params={useParams()} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId || 27146;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isMain !== prevProps.isMain) {
      if (this.props.isMain) {
        this.props.getProfile(this.props.params.userId);
      }
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getProfile: (newUserId) => getProfileThunkCreator(newUserId),
    getStatus,
    updateStatus,
  }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
