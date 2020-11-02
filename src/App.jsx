import React, { Fragment, useContext } from 'react';

// Icons
import AdvertiserIcon from '@material-ui/icons/AssignmentInd';
import PublisherIcon from '@material-ui/icons/LocalLibrary';

// Core
import { Box, Button, Dialog, DialogContent, Typography } from '@material-ui/core';
import DashboardAdvertiser from './dashboards/DashboardAdvertiser';
import DashboardPublisher from './dashboards/DashboardPublisher';
import { RoleContext } from './providers/RoleProvider.provider';

const App = () => {
  const { role, setNewRole } = useContext(RoleContext);

  return (
    <Fragment>
      <Box height="100vh" width="100vw" flexDirection="column" overflow="hidden" bgcolor="#465659" display="flex" alignItems="center">
          {role && role === 'publisher' && <DashboardPublisher />}
          {role && role === 'advertiser' && <DashboardAdvertiser />}
      </Box>

      <Dialog open={!role} maxWidth="sm" fullWidth disableBackdropClick>
          <DialogContent style={{ backgroundColor: '#233840'}}>
            <Box display="flex" flexDirection="column" width="100%" px={5} py={3}>
              <Typography variant="h6" paragraph color="secondary">
                Welcome back!
              </Typography>
              <Box display="flex" pb={3} alignItems="center">
                <Typography variant="body1" noWrap>
                  I am here as:
                </Typography>
                <Box display="flex" justifyContent="space-evenly" width="75%">
                  <Button onClick={() => setNewRole('publisher')} variant="outlined" color="secondary" startIcon={<PublisherIcon />}>
                    Publisher
                  </Button>
                  <Button onClick={() => setNewRole('advertiser')} variant="outlined" color="secondary" startIcon={<AdvertiserIcon />}>
                    Advertiser
                  </Button>
                </Box>
              </Box>
            </Box>
          </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default App;
