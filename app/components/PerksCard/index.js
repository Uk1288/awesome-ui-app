import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import { APP_WHITE, APP_BLACK } from '../../utils/colors';
import PerkItem from './PerkItem';
import { PERKS } from '../../utils/appConstants';

const useStyles = makeStyles({
  appBtn: {
    zIndex: 1,
    marginRight: '76px',
  },
  appHeader: {
    textAlign: 'left',
    color: APP_WHITE,
    margin: '70px 0px 30px 150px',
  },
});

const Container = styled.div`
  height: 800px;
  background-color: ${APP_BLACK};
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PerksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 150px;
  justify-content: space-between;
`;

export const PerksCard = () => {
  const classes = useStyles();

  return (
    <Container>
      <HeaderSection>
        <AppMenu />
        <AppButton btnText="TRY IT NOW" btnClass={classes.appBtn} />
      </HeaderSection>
      <AppHeader headerText="PERKS" headerClass={classes.appHeader} />
      <PerksList>
        {PERKS.map((perk, index) => (
          <PerkItem
            key={perk.title + index}
            title={perk.title}
            summary={perk.summary}
            color={perk.color}
          />
        ))}
      </PerksList>
    </Container>
  );
};

export default PerksCard;
