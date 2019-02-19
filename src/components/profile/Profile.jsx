import React from 'react';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard';
import ProfileList from './ProfileList';
import ProfileGrid from './ProfileGrid';

const Profile = props => {
  const { currentUserReducer } = props;
  return (
    <div>
      <ProfileGrid
        profileCard={<ProfileCard user={currentUserReducer.user} profileList={<ProfileList />} />}
      />
    </div>
  );
};

const mapStateToProps = ({ currentUserReducer }) => ({
  currentUserReducer
});
export default connect(mapStateToProps)(Profile);
