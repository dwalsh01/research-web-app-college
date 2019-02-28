import React from 'react';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard';
import ProfileList from './ProfileList';
import ProfileGrid from './ProfileGrid';
import { fetchEducation } from '../../actions';
import Loader from '../loader/Loader'
;
class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchEducation();
  }

  render() {
    const { currentUserReducer, EducationReducer } = this.props;
    if (EducationReducer.isFetching) {
      return <Loader />;
    }
    return (
      <div>
        <ProfileGrid
          profileCard={<ProfileCard user={currentUserReducer.user} profileList={<ProfileList />} />}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ currentUserReducer, EducationReducer }) => ({
  currentUserReducer,
  EducationReducer
});
export default connect(
  mapStateToProps,
  { fetchEducation }
)(Profile);
