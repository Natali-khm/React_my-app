import React from "react";
import { connect } from "react-redux";
import {
  followThunkCreator,
  getUsersThunkCreator,
  toggleIsFollowingProgress,
  unfollowThunkCreator,
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import { withAuthRedirect } from "../../hoc/hoc";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (p) => {
    this.props.getUsers(this.props.pageSize, p);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        />
      </>
    );
  }
}


let withRedirect = withAuthRedirect(UsersContainer)


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followThunkCreator(userId)),
    unfollow: (userId) => dispatch(unfollowThunkCreator(userId)),
    getUsers: (pageSize, currentPage) =>
      dispatch(getUsersThunkCreator(pageSize, currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRedirect);
