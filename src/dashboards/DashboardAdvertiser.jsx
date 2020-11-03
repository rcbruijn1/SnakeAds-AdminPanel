import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import { Card, Box, Typography, Divider, Zoom, Dialog, DialogContent, Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { compressArray } from '../helpers/objectCounter.helper';
import AppBar from '../AppBar/AppBar';

import { useDashboardStyles } from './Dashboard.style';

const DashboardAdvertiser = () => {
  const classes = useDashboardStyles();

  const [activeAdvertiser, setActiveAdvertiser] = useState({ id: '', name: '' });
  const [ads, setAds] = useState(null);

  const handleAdvertiserChange = value => {
    setActiveAdvertiser(value);
  };

  const handleClickUpdate = user => {
    axios.get(`http://localhost:3000`)
    .then(res => {
      const assets = res.data;
      let advertiserAds = assets.filter(ad => ad.Record.advertiserId === user);
      const sortedAds = compressArray(advertiserAds);
      setAds(sortedAds);
    })
  };

    useEffect(() => {
        handleClickUpdate(activeAdvertiser.id);
  }, [activeAdvertiser.id !== '']);

    return (
      <Fragment>
        <AppBar onRefresh={() => handleClickUpdate} />
        {activeAdvertiser.id !== '' && (
          <Zoom in={activeAdvertiser.id !== ''}>
            <Card classes={{ root: classes.card }}>
              <Typography variant="h6" color="secondary" paragraph>
                {`Advertiser ${activeAdvertiser.name}`}
              </Typography>

              <Divider classes={{ root: classes.divider }} />

              <Box width="100%">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Advertisement ID</TableCell>
                      <TableCell>Clicks</TableCell>
                      <TableCell>Publisher</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ads.map(ad => (
                      <TableRow key={ad.id}>
                        <TableCell>{ad.id}</TableCell>
                        <TableCell>{ad.clicks}</TableCell>
                        <TableCell>{ad.publisherId}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Card>
          </Zoom>
        )}

        <Dialog open={activeAdvertiser.id === ''} maxWidth="sm" fullWidth disableBackdropClick>
          <DialogContent classes={{ root: classes.dialogContent }}>
              <Typography>
                Select your user account:
              </Typography>

              <Select
                className={classes.select}
                displayEmpty
                value={activeAdvertiser}
                onChange={event => handleAdvertiserChange(event.target.value)}
              >
                <MenuItem value="" disabled>Select..</MenuItem>
                <MenuItem value={{ id: 'adver1_10/2020', name: 'Bob' }}>Bob</MenuItem>
                <MenuItem value={{ id: 'adver2_10/2020', name: 'Mary' }}>Mary</MenuItem>
                <MenuItem value={{ id: 'adver3_10/2020', name: 'John' }}>John</MenuItem>
              </Select>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
};

export default DashboardAdvertiser;