import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RefreshIcon from '@material-ui/icons/Loop';
import PeopleIcon from '@material-ui/icons/People';

import { AppBar as MuiAppBar, Toolbar, Box, Typography, Button } from '@material-ui/core';

import { useAppBarStyles } from './AppBar.style';
import { RoleContext } from '../providers/RoleProvider.provider';

const AppBar = ({ onRefresh}) => {
    const { role, setNewRole } = useContext(RoleContext);
    const classes = useAppBarStyles();
    
    return (
    <MuiAppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
            <Typography variant="h6" color="secondary">
              SnakeAds Admin panel
            </Typography>

            <Box>
              <Button className={classes.button} color="secondary" variant="outlined" startIcon={<RefreshIcon />} onClick={onRefresh}>
                Update
              </Button>
              <Button className={classes.button} color="secondary" variant="outlined" startIcon={<PeopleIcon />} onClick={() => setNewRole(null)}>
                Switch role
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </MuiAppBar>
    );
};

AppBar.propTypes = {
 onRefresh: PropTypes.func,
};

export default AppBar;