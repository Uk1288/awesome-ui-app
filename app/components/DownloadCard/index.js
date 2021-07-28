import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import AppSubtitle from '../AppSubtitle';
import { APP_ORANGE, APP_WHITE, APP_BLACK } from '../../utils/colors';

const useStyles = makeStyles({
  appBtn: {
    marginRight: '76px',
  },
  appSubtitle: {
    textAlign: 'left',
    color: APP_WHITE,
  },
  appHeader: {
    textAlign: 'left',
    color: APP_ORANGE,
  },
});

const Container = styled.div`
  height: 700px;
  background-color: ${APP_BLACK};
`;

const BodySection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 146px;
`;

const SummaryCard = styled.div``;

export const DownloadCard = () => {
  const classes = useStyles();

  return (
    <Container>
      <AppMenu />
      <BodySection>
        <SummaryCard>
          <AppHeader
            headerText="GET EXP|CON NOW"
            headerClass={classes.appHeader}
          />
          <AppSubtitle
            subtitleText="Purchase and download the app."
            subtitleClass={classes.appSubtitle}
          />
        </SummaryCard>
        <AppButton btnText="TRY IT NOW" btnClass={classes.appBtn} />
      </BodySection>
    </Container>
  );
};

export default DownloadCard;
