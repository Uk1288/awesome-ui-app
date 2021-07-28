import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const Container = styled.div`
  min-width: 910px;
  overflow: auto;
`;

export default function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
