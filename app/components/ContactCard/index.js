import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import { APP_WHITE, APP_PURPLE } from '../../utils/colors';

const Container = styled.div`
  height: 700px;
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
`;

const FooterText = styled.div`
  font: normal normal normal 24px/29px Helvetica Neue;
  letter-spacing: 2.4px;
  color: ${APP_WHITE};
  margin-top: 45px;
`;

const Subtitle = styled.div`
  text-align: center;
  font: normal normal normal 32px/44px Helvetica Neue;
  letter-spacing: 3.2px;
  margin-top: 32px;
  color: ${APP_WHITE};
`;

export const SoundCard = () => {
  return (
    <Container>
      <EmailText>
        <EmailIcon />
        {' support@experienceconcerts.co'}
      </EmailText>
      <Subtitle>{'EXP|CON'}</Subtitle>
      <FooterText>
        {'2019 © All Rights Reserved | Speer Technologies Incorporated'}
      </FooterText>
    </Container>
  );
};

export default SoundCard;
