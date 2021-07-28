import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ConcertImage from '../../images/ConcertImage.png';
import ConcertImageTwo from '../../images/ConcertImageTwo.png';
import AppMenu from '../AppMenu';
import { APP_WHITE } from '../../utils/colors';
import { EXTRA_LARGE_SCREEN } from '../../utils/appConstants';
import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import AppSubtitle from '../AppSubtitle';

const useStyles = makeStyles({
  uncheckedIcon: {
    fontSize: '17px',
    margin: '2px',
  },
  circleIcon: {
    fontSize: '21px',
  },
  appSubtitle: {
    [`@media only screen and ${EXTRA_LARGE_SCREEN}`]: {
      marginLeft: '230px',
      marginRight: '230px',
    },
  },
});

const Container = styled.div`
  height: 700px;
  background-image: url(${props => props.imageToDisplay});
  background-size: cover;
  color: ${APP_WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TEN_SECONDS = 10000;

export const ConcertCard = () => {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay
      interval={TEN_SECONDS}
      showThumbs={false}
      infiniteLoop
      showArrows={false}
      showStatus={false}
    >
      {[ConcertImage, ConcertImageTwo].map((image, index) => (
        <Container imageToDisplay={image} key={index}>
          <AppMenu />
          <AppHeader headerText="INTERACTIVE CONCERT EXPERIENCE" />
          <AppSubtitle
            subtitleClass={classes.appSubtitle}
            subtitleText="Experience your favourite artists like never before and from the comfort
      of your own home."
          />
          <AppButton
            btnText="TRY IT NOW"
            onClick={() => alert('you clicked! Pricing page coming soon')}
          />
        </Container>
      ))}
    </Carousel>
  );
};

export default ConcertCard;
