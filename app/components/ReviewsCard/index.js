import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import { APP_WHITE, APP_TEAL } from '../../utils/colors';
import FirstReviewSpeakerImg from '../../images/FirstReviewSpeaker.png';
import SecondReviewSpeakerImg from '../../images/SecondReviewSpeaker.png';
import { REVIEWS, EXTRA_LARGE_SCREEN } from '../../utils/appConstants';
import ReviewItem from './ReviewItem';

const useStyles = makeStyles({
  appBtn: {
    color: APP_TEAL,
    background: APP_WHITE,
    marginRight: '76px',
  },
  appHeader: {
    textAlign: 'left',
    color: APP_WHITE,
  },
});

const Container = styled.div`
  height: 700px;
  background-color: ${APP_TEAL};
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BodySection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 50px;
`;

const SummaryCard = styled.div``;

const ReviewSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageCard = styled.div`
  position: relative;
  display: flex;
  height: 400px;
  width: 270px;
`;

const FirstReviewSpeaker = styled.div`
  background-image: url(${FirstReviewSpeakerImg});
  height: 400px;
  width: 400px;
  background-size: contain;
  position: absolute;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    transform: scale(0.8);
    left: -80px;
  }
`;

const SecondReviewSpeaker = styled.div`
  background-image: url(${SecondReviewSpeakerImg});
  height: 400px;
  width: 400px;
  background-size: contain;
  margin-top: 190px;
  position: absolute;
  left: 40px;
  @media only screen and ${EXTRA_LARGE_SCREEN} {
    transform: scale(0.8);
    top: -50px;
    left: -40px;
  }
`;

export const ReviewsCard = () => {
  const classes = useStyles();

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
        <ImageCard>
          <FirstReviewSpeaker />
          <SecondReviewSpeaker />
        </ImageCard>
        <SummaryCard>
          <AppHeader headerText="REVIEWS" headerClass={classes.appHeader} />
          <ReviewSection>
            {REVIEWS.map(review => (
              <ReviewItem
                key={review.title}
                rating={review.rating}
                title={review.title}
                summary={review.summary}
              />
            ))}
          </ReviewSection>
        </SummaryCard>
      </BodySection>
    </Container>
  );
};

export default ReviewsCard;
