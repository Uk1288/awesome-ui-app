import React from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import { APP_WHITE } from '../../utils/colors';

const Container = styled.div`
  max-width: 308px;
  margin: 10px;
`;

const RatingSection = styled.div`
  display: flex;
`;

const Title = styled.div`
  text-align: left;
  font: normal normal bold 35px/43px Helvetica Neue;
  letter-spacing: 3.5px;
  color: ${APP_WHITE};
  margin: 10px 0px;
`;

const Summary = styled.div`
  text-align: left;
  font: normal normal normal 35px/41px Helvetica Neue;
  letter-spacing: 3.5px;
`;

export const ReviewItem = ({ rating, title, summary }) => {
  return (
    <Container>
      <RatingSection>
        {Array(rating)
          .fill(true)
          .map((_, index) => (
            <StarIcon key={index} />
          ))}
      </RatingSection>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
    </Container>
  );
};

export default ReviewItem;
