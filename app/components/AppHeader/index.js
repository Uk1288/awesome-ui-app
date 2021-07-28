import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EXTRA_LARGE_SCREEN } from '../../utils/appConstants';

const Header = styled.div`
  text-align: center;
  font: normal normal bold 65px/79px Helvetica Neue;
  letter-spacing: 6.5px;
  margin-top: 100px;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    font: normal normal bold 32px/44px Helvetica Neue;
  }
`;

export const AppHeader = ({ headerText, headerClass = '' }) => (
  <Header className={headerClass}>{headerText}</Header>
);

AppHeader.propType = {
  headerText: PropTypes.string.isRequired,
  headerClass: PropTypes.string,
};

export default AppHeader;
