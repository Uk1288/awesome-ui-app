import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppMenu from '../AppMenu';
import AppButton from '../AppButton';
import AppHeader from '../AppHeader';
import AppSubtitle from '../AppSubtitle';
import { APP_YELLOW, APP_WHITE, APP_BLACK } from '../../utils/colors';

const useStyles = makeStyles({
  appBtn: {
    color: APP_YELLOW,
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
  smallImageBtn: {
    width: '240px',
    height: '240px',
    borderRadius: '120px',
    position: 'absolute',
    color: APP_YELLOW,
    background: APP_BLACK,
    top: '10px',
    left: '230px',
    font: 'normal normal bold 32px/50px Helvetica Neue',
    letterSpacing: '5.8px',
  },
  bigImageBtn: {
    width: '340px',
    height: '340px',
    position: 'absolute',
    color: APP_YELLOW,
    background: APP_BLACK,
    borderRadius: '170px',
    top: '160px',
    left: '85px',
    font: 'normal normal bold 55px/72px Helvetica Neue',
    letterSpacing: '9.1px',
  },
  revealBtn: {
    width: '145px',
    height: '145px',
    position: 'absolute',
    background: APP_BLACK,
    top: '170px',
    left: '325px',
  },
  innerRevealBtn: {
    width: '125px',
    height: '125px',
    position: 'absolute',
    color: APP_WHITE,
    background: APP_BLACK,
    border: `3px solid ${APP_WHITE}`,
    top: '180px',
    left: '335px',
  },
  bottomImageBtn: {
    top: '300px',
    left: '500px',
    font: 'normal normal bold 32px/50px Helvetica Neue',
    letterSpacing: '5.8px',
  },
});

const Container = styled.div`
  height: 700px;
  background-color: ${APP_YELLOW};
  overflow: hidden;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BodySection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SummaryCard = styled.div`
  position: relative;
`;

const ImageCard = styled.div`
  position: relative;
`;

export const SeatsCard = () => {
  const classes = useStyles();

  return (
    <Container>
      <HeaderSection>
        <AppMenu />
        <AppButton btnText="TRY IT NOW" btnClass={classes.appBtn} />
      </HeaderSection>
      <BodySection>
        <ImageCard>
          <AppButton btnText="IMAGE" btnClass={classes.smallImageBtn} />
          <AppButton btnText="IMAGE" btnClass={classes.bigImageBtn} />
          <AppButton btnText="" btnClass={classes.revealBtn} />
          <AppButton btnText="REVEAL" btnClass={classes.innerRevealBtn} />
        </ImageCard>
        <SummaryCard>
          <AppHeader
            headerText="FRONT ROW SEATS"
            headerClass={classes.appHeader}
          />
          <AppSubtitle
            subtitleText="Experience concerts up close and personal."
            subtitleClass={classes.appSubtitle}
          />
          <AppButton btnText="SEE DEMO" btnClass={classes.appBtn} />
          <AppButton
            btnText="IMAGE"
            btnClass={`${classes.bigImageBtn} ${classes.bottomImageBtn}`}
          />
        </SummaryCard>
      </BodySection>
    </Container>
  );
};

export default SeatsCard;
