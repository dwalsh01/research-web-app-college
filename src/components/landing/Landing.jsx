import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { connect } from 'react-redux';
import params from '../../util/params';
import logo from '../../assets/logo_01.png';
import FormDialog from '../login/FormDialog';
import RegisterModal from '../register/RegisterModal';
import LoginErrorMsg from '../login/LoginErrorMsg';

const StyledParticles = styled.div`
  .centered {
    font-size: 45px !important;
    position: fixed;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  a {
    margin: 10px;
  }
`;

// TODO: add a form modal button for register puroposes
const Landing = props => {
  const { currentUserReducer } = props;
  return (
    <StyledParticles>
      <Particles
        params={params}
        style={{
          background: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
          padding: '0'
        }}
      />
      <div className="centered">
        <img src={logo} alt="SFI Ireland logo, for what's next" />
        <FormDialog />
        <RegisterModal />
      </div>
      {currentUserReducer.errorMsg.length > 0 ? (
        <LoginErrorMsg message={currentUserReducer.errorMsg} />
      ) : (
        ''
      )}
    </StyledParticles>
  );
};
const mapStateToProps = ({ currentUserReducer }) => ({
  currentUserReducer
});

export default connect(mapStateToProps)(Landing);
