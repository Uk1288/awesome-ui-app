import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import AppSubtitle from '../AppSubtitle';
import { APP_ORANGE, APP_WHITE } from '../../utils/colors';
import SpeakerAbove from '../../images/SpeakerAbove.png';
import SpeakerBelow from '../../images/SpeakerBelow.png';
import AudioSound from '../../audioFiles/SoundScienceFiction.mp3';
import { EXTRA_LARGE_SCREEN, LARGE_SCREEN } from '../../utils/appConstants';

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
    [`@media only screen and ${EXTRA_LARGE_SCREEN}`]: {
      width: '100px',
      height: '100px',
      bottom: '50px',
      left: '233px',
      border: `2px solid ${APP_WHITE}`,
    },
    [`@media only screen and ${LARGE_SCREEN}`]: {
      bottom: '100px',
      left: '163px',
    },
  },
});

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

const ImageCard = styled.div`
  position: relative;
  display: flex;
`;

const FirstSpeaker = styled.div`
  background-image: url(${SpeakerAbove});
  height: 397px;
  width: 254px;
  background-size: contain;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    transform: scale(0.8);
  }
  @media only screen and ${LARGE_SCREEN} {
    width: 200px;
  }
`;

const SecondSpeaker = styled.div`
  background-image: url(${SpeakerBelow});
  height: 397px;
  width: 254px;
  background-size: contain;
  margin-top: 190px;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    transform: scale(0.8);
  }
  @media only screen and ${LARGE_SCREEN} {
    width: 200px;
    margin-top: 100px;
  }
`;

export const SoundCard = () => {
  const classes = useStyles();
  const [isAudioPlaying, setAudioPlaying] = useState(false);
  const playerElement = useRef(null);
  const audioContext = new AudioContext();

  useEffect(() => {
    let audioTrack;
    if (playerElement && playerElement.current) {
      audioTrack = audioContext.createMediaElementSource(playerElement.current);
      audioTrack.connect(audioContext.destination);
    }
    // cleanup audio connection
    return () => {
      audioTrack && audioTrack.disconnect();
    };
  }, [playerElement]);

  const handleAudioBtnClick = async () => {
    const shouldAudioPlay = !isAudioPlaying;
    if (shouldAudioPlay) {
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }
      playerElement.current.play();
    } else {
      playerElement.current.pause();
      if (audioContext.state === 'running') {
        await audioContext.suspend();
      }
    }
    setAudioPlaying(() => shouldAudioPlay);
  };

  return (
    <Container>
      <HeaderSection>
        <AppMenu />
        <AppButton
          btnText="TRY IT NOW"
          btnClass={classes.appBtn}
          onClick={() => alert('you clicked! Pricing page coming soon')}
        />
      </HeaderSection>
      <BodySection>
        <div>
          <AppHeader
            headerText="SUPERIOR SOUND"
            headerClass={classes.appHeader}
          />
          <AppSubtitle
            subtitleText="Experience live versions of your favourite songs."
            subtitleClass={classes.appSubtitle}
          />
          <AppButton
            btnText="SEE DEMO"
            btnClass={classes.appBtn}
            onClick={() => alert('you clicked! Pricing page coming soon')}
          />
        </div>
        <ImageCard>
          <FirstSpeaker />
          <SecondSpeaker />
          <audio
            src={AudioSound}
            ref={playerElement}
            onEnded={() => setAudioPlaying(false)}
          />
          <AppButton
            btnText="CLICK"
            btnClass={classes.playerBtn}
            onClick={handleAudioBtnClick}
          />
        </ImageCard>
      </BodySection>
    </Container>
  );
};

export default SoundCard;
