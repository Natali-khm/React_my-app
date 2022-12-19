import React from "react";
import { connect } from "react-redux";
import { getProfileThunkCreator } from "../../redux/profile_reducer";
import Profile from "./Profile";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/hoc";


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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}



let authRedirectComponent = withAuthRedirect(ProfileContainer)

let withUrlDataContainerComponent = withRouter(authRedirectComponent)


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});


export default connect(mapStateToProps, {
  getProfile: (newUserId) => getProfileThunkCreator(newUserId),
})(withUrlDataContainerComponent);
