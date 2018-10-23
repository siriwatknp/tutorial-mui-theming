import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// ICONS
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

// STYLES
import withNavigatorStyles from './Navigator.style';

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

const Navigator = ({ classes }) => (
  <Drawer variant="permanent" classes={{ paper: 'navigator' }}>
    <List className={classes.list}>
      <ListItem className={classes.header}>
        <ListItemIcon>
          <img
            alt={'logo'}
            className={'firebase-logo'}
            src={
              'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'
            }
          />
        </ListItemIcon>
        <ListItemText>
          <img
            alt={'label'}
            className={'firebase-label'}
            src={
              'https://www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg'
            }
          />
        </ListItemText>
      </ListItem>
      <ListItem className={classes.header}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText>Project Overview</ListItemText>
        <IconButton disableRipple className={classes.smallIcon}>
          <Settings />
        </IconButton>
      </ListItem>
      {categories.map(({ id, children }) => (
        <React.Fragment key={id}>
          <ListItem>
            <ListItemText>{id}</ListItemText>
          </ListItem>
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
);

Navigator.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withNavigatorStyles(Navigator);
