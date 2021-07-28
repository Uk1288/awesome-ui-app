import React from 'react';
import styled from 'styled-components';
import { APP_WHITE } from '../../utils/colors';
import { EXTRA_LARGE_SCREEN } from '../../utils/appConstants';

const Button = styled.button`
  width: 284px;
  height: 79px;
  margin-top: 43px;
  letter-spacing: 2.3px;
  font: normal normal bold 23px/28px Helvetica Neue;
  background: transparent
    linear-gradient(90deg, #1fe1e9 0%, #5e33d1 34%, #d34848 65%, #ffb33f 100%)
    0% 0% no-repeat padding-box;
  border-radius: 79px;
  border: none;
  color: ${APP_WHITE};
  :hover {
    cursor: pointer;
  }
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    height: 60px;
    border-radius: 60px;
    font: normal normal bold 21px/28px Helvetica Neue;
  }
`;

export const AppButton = ({ btnText, btnClass = '', onClick }) => (
  <Button className={btnClass} onClick={onClick}>
    {btnText}
  </Button>
);

export default AppButton;
