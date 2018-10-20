import React from 'react';

import styled, { cx } from 'react-emotion';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';

import Settings from '@material-ui/icons/Settings';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import DnsRounded from '@material-ui/icons/DnsRounded';
import PermMediaOutlined from '@material-ui/icons/PermMediaOutlined';
import Public from '@material-ui/icons/Public';
import SettingsEthernet from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent';
import Dashboard from '@material-ui/icons/Dashboard';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import PhonelinkSetup from '@material-ui/icons/PhonelinkSetup';
import Notifications from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';
import Refresh from '@material-ui/icons/Refresh';

const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', icon: <People /> },
      { id: 'Database', icon: <DnsRounded /> },
      { id: 'Storage', icon: <PermMediaOutlined /> },
      { id: 'Hosting', icon: <Public /> },
      { id: 'Functions', icon: <SettingsEthernet /> },
      { id: 'ML Kits', icon: <SettingsInputComponent /> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Crashlytics', icon: <SettingsApplications /> },
      { id: 'Performance', icon: <Dashboard /> },
      { id: 'Test Lab', icon: <PhonelinkSetup /> },
    ],
  },
];

const App = styled(({ className }) => (
  <div className={cx('App', className)}>
    <CssBaseline />
    <Drawer variant="permanent" classes={{ paper: 'navigator' }}>
      <List>
        <ListItem>
          <img
            alt={'logo'}
            className={'firebase-logo'}
            src={
              'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'
            }
          />
          <img
            alt={'label'}
            className={'firebase-label'}
            src={
              'https://www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg'
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
          <ListItemSecondaryAction>
            <IconButton disableRipple>
              <Settings />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem>{id}</ListItem>
            {children.map(({ id: childId, icon }) => (
              <ListItem button dense key={childId}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{childId}</ListItemText>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
    <div className={'app-content'}>
      <AppBar
        className={'primary-app-bar'}
        color={'default'}
        position={'sticky'}
      >
        <Toolbar>
          <Grid container justify={'center'} alignItems={'center'} spacing={16}>
            <Grid item>
              <Typography>
                You're viewing the Firebase demo project.
              </Typography>
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
              <Typography component={'a'} href={'#'} color={'primary'}>Go to docs</Typography>
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
      <AppBar
        className={'fourth-app-bar'}
        color={'default'}
        position={'static'}
      >
        <Tabs value={0} indicatorColor="primary" textColor="primary">
          <Tab label="User" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
      </AppBar>
      <main className={'main-content'}>
        <Paper style={{ maxWidth: 936, margin: 'auto' }}>
          <AppBar position={'static'} color={'default'}>
            <Toolbar>
              <Search />
              <TextField
                fullWidth
                placeholder={
                  'Search by email address, phone number, or user UID'
                }
              />
              <Refresh />
            </Toolbar>
          </AppBar>
          <Grid container justify={'center'}>
            <Grid item>
              <img
                src={
                  'https://www.gstatic.com/mobilesdk/160505_mobilesdk/zerostate/2x/auth.png'
                }
                alt={'auth'}
                style={{ width: 192, height: 192 }}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant={'h5'}>
                Authenticate and manage users from a variety of providers
                without server-side code
              </Typography>
            </Grid>
          </Grid>
        </Paper>
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
