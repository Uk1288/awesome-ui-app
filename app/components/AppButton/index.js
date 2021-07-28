import React from 'react';
import styled from 'styled-components';
import { APP_WHITE } from '../../utils/colors';

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
`;

export const AppButton = ({ btnText, btnClass = '' }) => {
  return <Button className={btnClass}>{btnText}</Button>;
};

export default AppButton;
