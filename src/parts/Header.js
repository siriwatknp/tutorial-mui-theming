import React from 'react';

// COMPONENTS
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// ICONS
import Notifications from '@material-ui/icons/Notifications';

const Header = () => (
  <React.Fragment>
    <AppBar className={'primary-app-bar'} color={'default'} position={'sticky'}>
      <Toolbar>
        <Grid container justify={'center'} alignItems={'center'} spacing={16}>
          <Grid item>
            <Typography>You are viewing the Firebase demo project.</Typography>
            <Typography color={'primary'} component={'a'} href={'#'}>
              Learn more
            </Typography>
          </Grid>
          <Grid item>
            <Button color={'primary'} variant={'contained'}>
              Create a project
            </Button>
          </Grid>
          <Grid item>
            <Button>Exit demo</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <AppBar
      className={'secondary-app-bar'}
      color={'default'}
      position={'sticky'}
    >
      <Toolbar>
        <Grid container spacing={16} justify={'flex-end'} alignItems={'center'}>
          <Grid item>
            <Typography component={'a'} href={'#'} color={'primary'}>
              Go to docs
            </Typography>
          </Grid>
          <Grid item>
            <Notifications color={'action'} />
          </Grid>
          <Grid item>
            <Avatar
              src={
                'https://lh3.googleusercontent.com/-mYNSKSzYGjw/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbABtwn15AVhtNsFWiPi-8vW8A7Lig/s64-c-mo/photo.jpg'
              }
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <AppBar className={'third-app-bar'} color={'default'} position={'static'}>
      <Toolbar>
        <Typography variant={'h4'}>Authentication</Typography>
      </Toolbar>
    </AppBar>
    <AppBar className={'fourth-app-bar'} color={'default'} position={'static'}>
      <Tabs value={0} indicatorColor="primary" textColor="primary">
        <Tab label="User" />
        <Tab label="Sign-in method" />
        <Tab label="Templates" />
        <Tab label="Usage" />
      </Tabs>
    </AppBar>
  </React.Fragment>
);

export default Header;
