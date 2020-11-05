import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// Core
import { Card, Box, Typography, Divider, Zoom, Dialog, DialogContent, Select, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@material-ui/core';
import { compressArray } from '../helpers/objectCounter.helper';
import AppBar from '../AppBar/AppBar';

// Style
import { useDashboardStyles } from './Dashboard.style';

// Assets
import coolblue_logo from '../assets/coolblue.svg';
import tweakers_logo from '../assets/tweakers.jpg';
import daisycon_logo from '../assets/daisycon.png';

const DashboardAdvertiser = () => {
  const classes = useDashboardStyles();

  const [activeAdvertiser, setActiveAdvertiser] = useState({ id: '', name: '' });
  const [ads, setAds] = useState(null);

  const handleAdvertiserChange = value => {
    setActiveAdvertiser(value);
  };

  const handleClickUpdate = user => {
    axios.get(`https://proxy.server7.omega2.nl/`)
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
  console.log(ads);
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
                {ads.length > 0 ? (
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
                ) : (
                  <Typography variant="body1" color="secondary">
                    No data to display yet!
                  </Typography>
                )}
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
                <MenuItem value={{ id: 'adver1_10/2020/Coolbue', name: 'Bob' }}>
                  <Avatar src={coolblue_logo} className={classes.avatar} />
                  <Typography variant="body1" color="secondary">
                    Bob
                  </Typography>
                  </MenuItem>
                <MenuItem value={{ id: 'adver2_10/2020/Tweakers', name: 'Mary' }}>
                  <Avatar src={tweakers_logo} className={classes.avatar} />
                  <Typography variant="body1" color="secondary">
                    Mary
                  </Typography>
                </MenuItem>
                <MenuItem value={{ id: 'adver3_10/2020/Daisycon', name: 'John' }}>
                  <Avatar src={daisycon_logo} className={classes.avatar} />
                  <Typography variant="body1" color="secondary">
                    John
                  </Typography>
              </MenuItem>
              </Select>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
};

export default DashboardAdvertiser;