import React from 'react';

import styled, { cx } from 'react-emotion';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'parts/Header';
import Navigator from 'parts/Navigator';
import Content from 'parts/Content';

const App = styled(({ className }) => (
  <div className={cx('App', className)}>
    <CssBaseline />
    <Navigator />
    <div className={'app-content'}>
      <Header />
      <main className={'main-content'}>
        <Content />
      </main>
    </div>
  </div>
))({
  '&.App': {
    display: 'flex',
    minHeight: '100vh',
  },
  '.firebase-logo': {
    maxHeight: 28,
  },
  '.firebase-label': {
    height: 18,
  },
  '.navigator': {
    position: 'relative',
  },
  '.app-content': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    main: {
      flex: 1,
    },
    '.primary-app-bar': {
      zIndex: 1150,
    },
    '.secondary-app-bar': {
      top: 64,
      zIndex: 1140,
    },
    '.main-content': {
      paddingTop: 48,
    },
  },
});

export default App;
