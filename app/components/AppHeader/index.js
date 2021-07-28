import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
  font: normal normal bold 65px/79px Helvetica Neue;
  letter-spacing: 6.5px;
  margin-top: 100px;
`;

export const AppHeader = ({ headerText, headerClass = '' }) => (
  <Header className={headerClass}>{headerText}</Header>
);

export default AppHeader;
