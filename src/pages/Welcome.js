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
      style={{ maxWidth: 200, marginBottom: 24, marginTop: -48 }}
      src={logo}
      alt={'logo'}
    />
    <Typography
      style={{
        marginBottom: 16,
        color: 'rgb(0, 0, 0, 0.72)',
        fontWeight: 100,
      }}
      variant={'h4'}
    >
      welcome to
    </Typography>
    <Typography
      style={{
        fontWeight: 200,
        color: 'rgb(0, 130, 209)',
      }}
      variant={'h3'}
    >
      MUI Theming Tutorial
    </Typography>
  </div>
);

export default Welcome;
