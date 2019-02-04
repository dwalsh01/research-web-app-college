import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import params from '../util/params';
import logo from '../assets/logo_01.png';

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
const Login = props => <Link to="/login" {...props} />;
const Register = props => <Link to="/register" {...props} />;
export default () => (
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
      <Button variant="contained" size="large" component={Login}>
        Login
      </Button>

      <Button variant="contained" size="large" color="secondary" component={Register}>
        Register
      </Button>
    </div>
  </StyledParticles>
);