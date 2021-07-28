import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EXTRA_LARGE_SCREEN } from '../../utils/appConstants';

const Subtitle = styled.div`
  text-align: center;
  font: normal normal normal 32px/44px Helvetica Neue;
  letter-spacing: 3.2px;
  margin-top: 32px;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    font: normal normal bold 24px/29px Helvetica Neue;
    margin-top: 20px;
  }
`;

export const AppSubtitle = ({ subtitleText, subtitleClass = '' }) => (
  <Subtitle className={subtitleClass}>{subtitleText}</Subtitle>
);

AppSubtitle.propType = {
  subtitleText: PropTypes.string.isRequired,
  subtitleClass: PropTypes.string,
};

export default AppSubtitle;
