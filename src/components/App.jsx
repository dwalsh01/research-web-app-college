import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Landing from './landing/Landing';
import Main from './Main';
import { currentUser } from '../actions/index';

const Loading = styled.div`
  position: 'fixed';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  text-align: 'center';
`;

class App extends React.Component {
  componentDidMount() {
    // fetch user
    this.props.currentUser();
  }

  renderContent() {
    switch (this.props.currentUserReducer) {
      case null:
        return (
          <Loading>
            <Loader type="Grid" color="#00aced" height="125" width="125" />
          </Loading>
        );
      case false:
        return <Landing />;
      default:
        return <Main />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = ({ currentUserReducer }) => ({
  currentUserReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    { currentUser }
  )(App)
);
