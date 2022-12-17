import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFollowingProgress,
  unfollowAC,
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.pageSize, p).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalUsersCount: (totalUsersCount) =>
      dispatch(setTotalUsersCountAC(totalUsersCount)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    toggleIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
    toggleIsFollowingProgress: (toggleFollProg, userId) =>
      dispatch(toggleIsFollowingProgress(toggleFollProg, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
