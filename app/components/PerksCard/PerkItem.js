import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { APP_WHITE } from '../../utils/colors';

const HorizontalBar = styled.div`
  border-bottom: 3px solid ${props => props.color};
  height: 0px;
  width: 104px;
`;

const Title = styled.div`
  text-align: left;
  margin: 18px 0px;
  font: normal normal bold 51px/62px Helvetica Neue;
  letter-spacing: 5.1px;
  color: ${props => props.color};
`;

const Summary = styled.div`
  text-align: left;
  font: normal normal normal 35px/41px Helvetica Neue;
  letter-spacing: 3.5px;
  color: ${APP_WHITE};
`;

const Container = styled.div`
  max-width: 443px;
`;

export const PerkItem = ({ title, summary, color }) => {
  return (
    <Container>
      <HorizontalBar color={color} />
      <Title color={color}>{title}</Title>
      <Summary>{summary}</Summary>
    </Container>
  );
};

PerkItem.prototype = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default PerkItem;