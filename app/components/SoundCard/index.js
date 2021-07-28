import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import AppSubtitle from '../AppSubtitle';
import { APP_ORANGE, APP_WHITE } from '../../utils/colors';
import SpeakerAbove from '../../images/SpeakerAbove.png';
import SpeakerBelow from '../../images/SpeakerBelow.png';

const useStyles = makeStyles({
  appBtn: {
    color: APP_ORANGE,
    background: APP_WHITE,
    marginRight: '76px',
  },
  appSubtitle: {
    textAlign: 'left',
  },
  appHeader: {
    textAlign: 'left',
    color: APP_WHITE,
  },
  playerBtn: {
    width: '145px',
    height: '145px',
    position: 'absolute',
    color: APP_WHITE,
    background: 'transparent',
    border: `3px solid ${APP_WHITE}`,
    bottom: '15px',
    left: '165px',
  },
});

// actual => scaled
// 1080px => 700px
// 814px => 527px
// 538px => 378px
const Container = styled.div`
  height: 700px;
  background-color: ${APP_ORANGE};
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BodySection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 146px;
`;

const SummaryCard = styled.div``;

const ImageCard = styled.div`
  position: relative;
  display: flex;
`;

const FirstSpeaker = styled.div`
  background-image: url(${SpeakerAbove});
  height: 397px;
  width: 254px;
  background-size: contain;
`;

const SecondSpeaker = styled.div`
  background-image: url(${SpeakerBelow});
  height: 397px;
  width: 254px;
  background-size: contain;
  margin-top: 190px;
`;

export const SoundCard = () => {
  const classes = useStyles();

  return (
    <Container>
      <HeaderSection>
        <AppMenu />
        <AppButton btnText="TRY IT NOW" btnClass={classes.appBtn} />
      </HeaderSection>
      <BodySection>
        <SummaryCard>
          <AppHeader
            headerText="SUPERIOR SOUND"
            headerClass={classes.appHeader}
          />
          <AppSubtitle
            subtitleText="Experience live versions of your favourite songs."
            subtitleClass={classes.appSubtitle}
          />
          <AppButton btnText="SEE DEMO" btnClass={classes.appBtn} />
        </SummaryCard>
        <ImageCard>
          <FirstSpeaker />
          <SecondSpeaker />
          <AppButton btnText="CLICK" btnClass={classes.playerBtn} />
        </ImageCard>
      </BodySection>
    </Container>
  );
};

export default SoundCard;
