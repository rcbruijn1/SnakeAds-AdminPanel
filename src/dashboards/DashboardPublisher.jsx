import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';


// Core
import { Card, Box, Typography, Divider, Zoom, Dialog, DialogContent, Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { compressArray } from '../helpers/objectCounter.helper';
import AppBar from '../AppBar/AppBar';

// Styles
import { useDashboardStyles } from './Dashboard.style';

const DashboardPublisher = () => {
  const classes = useDashboardStyles();

  const [activePublisher, setActivePublisher] = useState({ id: '', name: '' });
  const [ads, setAds] = useState(null);

  const handlePublisherChange = value => {
    setActivePublisher(value);
  };

  const handleClickUpdate = user => {
    axios.get(`https://proxy.server7.omega2.nl/`)
    .then(res => {
      const assets = res.data;
      let publisherAds = assets.filter(ad => ad.Record.publisherId === user);
      const sortedAds = compressArray(publisherAds);
      setAds(sortedAds);
    })
  };

    useEffect(() => {
        handleClickUpdate(activePublisher.id);
  }, [activePublisher.id !== '']);

  return (
    <Fragment>
      <AppBar onRefresh={() => handleClickUpdate} />
      {activePublisher.id !== '' && (
        <Zoom in={activePublisher.id !== ''}>
          <Card classes={{ root: classes.card }}>
            <Typography variant="h6" color="secondary" paragraph>
              {`Publisher ${activePublisher.name}`}
            </Typography>

            <Divider classes={{ root: classes.divider }} />

            <Box width="100%">
              {ads.length > 0 ? (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Advertisement ID</TableCell>
                        <TableCell>Clicks</TableCell>
                        <TableCell>Advertiser</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {ads.map(ad => (
                        <TableRow key={ad.id}>
                          <TableCell>{ad.id}</TableCell>
                          <TableCell>{ad.clicks}</TableCell>
                          <TableCell>{ad.advertiserId}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <Typography variant="body1" color="secondary">
                    No data to display yet!
                  </Typography>
                )}
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
              onChange={event => handlePublisherChange(event.target.value)}
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