import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.div`
  text-align: center;
  font: normal normal normal 32px/44px Helvetica Neue;
  letter-spacing: 3.2px;
  margin-top: 32px;
`;

export const AppSubtitle = ({ subtitleText, subtitleClass = '' }) => (
  <Subtitle className={subtitleClass}>{subtitleText}</Subtitle>
);

export default AppSubtitle;
