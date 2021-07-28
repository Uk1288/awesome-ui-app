import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CircleIcon from '@material-ui/icons/FiberManualRecord';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ConcertImage from '../../images/ConcertImage.png';
import AppMenu from '../AppMenu';
import { APP_WHITE } from '../../utils/colors';
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
});

const Container = styled.div`
  height: 700px;
  background-image: url(${ConcertImage});
  background-size: cover;
  color: ${APP_WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderButton = styled.div`
  display: flex;
  margin-top: 40px;
`;

const FIRST_SLIDER_CARD_INDEX = 0;
const SECOND_SLIDER_CARD_INDEX = 1;
const THIRD_SLIDER_CARD_INDEX = 2;

export const ConcertCard = () => {
  const classes = useStyles();

  const [activeCardIndex, setCardIndex] = useState(FIRST_SLIDER_CARD_INDEX);

  const isCardActive = cardIndex => cardIndex === activeCardIndex;

  return (
    <Container>
      <AppMenu />
      <AppHeader headerText="INTERACTIVE CONCERT EXPERIENCE" />
      <AppSubtitle
        subtitleText="Experience your favourite artists like never before and from the comfort
        of your own home."
      />
      <AppButton btnText="TRY IT NOW" />
      <SliderButton>
        {[
          FIRST_SLIDER_CARD_INDEX,
          SECOND_SLIDER_CARD_INDEX,
          THIRD_SLIDER_CARD_INDEX,
        ].map(cardIndex =>
          isCardActive(cardIndex) ? (
            <CircleIcon className={classes.circleIcon} key={cardIndex} />
          ) : (
            <UncheckedIcon
              className={classes.uncheckedIcon}
              key={cardIndex}
              onClick={() => setCardIndex(cardIndex)}
            />
          ),
        )}
      </SliderButton>
    </Container>
  );
};

export default ConcertCard;
