import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

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

const styles = theme => ({
  item: {
    padding: '4px 24px',
    '& svg': {
      fontSize: 20,
    },
  },
  actionable: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    '&:hover': {
      background: 'rgba(255,255,255,.08)',
    },
  },
  itemIcon: {
    margin: 0,
  },
  categoryHeader: {
    padding: '24px 24px 16px',
  },
  categoryHeaderText: {
    fontSize: 15,
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 500,
    '&$textDense': {
      fontSize: 14,
      fontWeight: 500,
    },
  },
  textDense: {},
});

const Navigator = ({ classes }) => (
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
      <ListItem className={classes.item}>
        <ListItemIcon className={classes.itemIcon}>
          <Home />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.itemText,
            textDense: classes.textDense,
          }}
        >
          Project Overview
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton disableRipple>
            <Settings />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {categories.map(({ id, children }) => (
        <React.Fragment key={id}>
          <ListItem className={classes.categoryHeader}>
            <ListItemText
              classes={{
                primary: classes.categoryHeaderText,
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
          {children.map(({ id: childId, icon }) => (
            <ListItem
              button
              dense
              key={childId}
              className={classes.item}
            >
              <ListItemIcon className={classes.itemIcon}>
                {icon}
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.itemText,
                  textDense: classes.textDense,
                }}
              >
                {childId}
              </ListItemText>
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

export default withStyles(styles)(Navigator);
