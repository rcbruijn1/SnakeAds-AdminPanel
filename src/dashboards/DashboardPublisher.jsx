import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import { Card, Box, Typography, Divider, Zoom, Dialog, DialogContent, Select, MenuItem } from '@material-ui/core';
import AppBar from '../AppBar/AppBar';

import { useDashboardStyles } from './Dashboard.style';

const DashboardPublisher = () => {
  const classes = useDashboardStyles();

  const [activePublisher, setActivePublisher] = useState({ id: '', name: '' });
  const [ads, setAds] = useState(null);

  const handleClickUpdate = user => {
    axios.get(`http://localhost:3000`)
    .then(res => {
      const assets = res.data;
      let publisherAds = assets.filter(ad => ad.Record.publisherId === user);
      setAds(publisherAds);
    })
  };

    useEffect(() => {
        handleClickUpdate(activePublisher.id);
  }, [activePublisher.id]);

  return (
    <Fragment>
      <AppBar onRefresh={() => handleClickUpdate} />
      {activePublisher.id !== '' && (
        <Zoom in={activePublisher.id}>
          <Card classes={{ root: classes.card }}>
            <Typography variant="h6" color="secondary" paragraph>
              {`Publisher ${activePublisher.name}`}
            </Typography>

            <Divider classes={{ root: classes.divider }} />

            <Box>
              {ads && ads.map(ad => (
                <Typography variant="body1" color="secondary">
                  {`AssetID: ${ad.Record.ID} -  Advertisement id: ${ad.Record.advertisementId}`}
                </Typography>
              ))}
            </Box>
          </Card>
        </Zoom>
      )}

      <Dialog open={activePublisher.id === ''} maxWidth="sm" fullWidth disableBackdropClick>
        <DialogContent classes={{ root: classes.dialogContent }}>
            <Typography>
              Select your user account:
            </Typography>

            <Select
              className={classes.select}
              displayEmpty
              value={activePublisher}
              onChange={event => setActivePublisher(event.target.value)}
            >
              <MenuItem value="" disabled>Select..</MenuItem>
              <MenuItem value={{ id: 'pub1_10/2020', name: 'Jane' }}>Jane</MenuItem>
              <MenuItem value={{ id: 'pub2_10/2020', name: 'Mark' }}>Mark</MenuItem>
              <MenuItem value={{ id: 'pub3_10/2020', name: 'Joe' }}>Joe</MenuItem>
            </Select>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default DashboardPublisher;