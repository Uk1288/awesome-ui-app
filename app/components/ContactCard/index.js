import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import { APP_WHITE, APP_PURPLE } from '../../utils/colors';
import { EXTRA_LARGE_SCREEN } from '../../utils/appConstants';

const Container = styled.div`
  height: 500px;
  background-color: ${APP_PURPLE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmailText = styled.div`
  font: normal normal normal 35px/41px Helvetica Neue;
  letter-spacing: 3.5px;
  align-self: flex-start;
  color: ${APP_WHITE};
  margin-left: 76px;
  margin-top: -100px;
  margin-bottom: 100px;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    font: normal normal normal 24px/29px Helvetica Neue;
  }
`;

const FooterText = styled.div`
  font: normal normal normal 24px/29px Helvetica Neue;
  letter-spacing: 2.4px;
  color: ${APP_WHITE};
  margin-top: 45px;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    font: normal normal normal 18px/24px Helvetica Neue;
    margin-top: 20px;
  }
`;

const Subtitle = styled.div`
  text-align: center;
  font: normal normal normal 32px/44px Helvetica Neue;
  letter-spacing: 3.2px;
  margin-top: 32px;
  color: ${APP_WHITE};
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    font: normal normal normal 24px/29px Helvetica Neue;
    margin-top: 20px;
  }
`;

export const SoundCard = () => (
  <Container>
    <EmailText>
      <EmailIcon />
      {' support@experienceconcerts.co'}
    </EmailText>
    <Subtitle>EXP|CON</Subtitle>
    <FooterText>
      {'2019 © All Rights Reserved | Speer Technologies Incorporated'}
    </FooterText>
  </Container>
);

export default SoundCard;
