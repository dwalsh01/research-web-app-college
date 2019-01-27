import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// .ToolbarHeader-content-11 padding: 0
const ErrorContainer = styled.div`
  font-size: 150px;
  font-weight: 300;
  text-align: center;
  h1 {
    position: relative;
  }
`;
const TakeBack = styled.p`
  font-size: 14px;
  position: absolute;
  width: 100%;
  bottom: 30px;
  margin: 0;
  a {
    color: #3f51b5;
    font-size: 18px;
    margin-left: 5px;
    padding-bottom: 1px;
    text-decoration: none;
    border-bottom: 1px solid #3f51b5;
    -webkit-transition: border-color 0.1s ease-in;
    transition: border-color 0.1s ease-in;
  }
`;

export default () => (
  <div>
    <ErrorContainer>
      <h1>404</h1>
      <TakeBack>
        Take me back to
        <Link to="/">fsigrantireland.ie</Link>
      </TakeBack>
    </ErrorContainer>
  </div>
);
