import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { APP_WHITE } from '../../utils/colors';
import { EXTRA_LARGE_SCREEN } from '../../utils/appConstants';

const useStyles = makeStyles({
  menuIcon: {
    fontSize: '48px',
    marginRight: '25px',
    [`@media only screen and ${EXTRA_LARGE_SCREEN}`]: {
      fontSize: '32px',
    },
  },
});

const Parent = styled.div`
  align-self: flex-start;
  display: flex;
  color: ${APP_WHITE};
  padding-top: 76px;
  padding-left: 76px;
  align-items: center;
`;

const Title = styled.div`
  font: normal normal normal 35px/45px Helvetica Neue;
  letter-spacing: 4.8px;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    font: normal normal normal 24px/29px Helvetica Neue;
  }
`;

export const AppMenu = () => {
  const classes = useStyles();

  return (
    <Parent>
      <MenuIcon className={classes.menuIcon} />
      <Title>EXP|CON</Title>
    </Parent>
  );
};

export default AppMenu;
