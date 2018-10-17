import React from 'react';
import logo from 'assets/mui-logo.png';

import Typography from '@material-ui/core/Typography';

const Welcome = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <img
      style={{ maxWidth: 200, marginBottom: 30, color: 'rgb(0, 178, 255)' }}
      src={logo}
      alt={'logo'}
    />
    <Typography
      style={{
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'rgb(0, 130, 209)',
      }}
      variant={'h4'}
    >
      Welcome to
    </Typography>
    <Typography style={{ fontWeight: 200 }} variant={'h3'}>
      MUI Theming Tutorial
    </Typography>
  </div>
);

export default Welcome;
