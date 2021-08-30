import React from 'react';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Logo from '../components/Logo';
import { useStyles } from '../styles';

export default function HomeScreen() {
  const styles = useStyles();
  return (
    <Card>
      <CardActionArea>
        <Box className={[styles.root, styles.love]}>
          <Box className={[styles.main, styles.center]}>
            <Typography compnent="h6" variant="h6">
              Fast & Easy
            </Typography>
            <Typography compnent="h1" variant="h1">
              Order <br /> & pay <br /> here
            </Typography>
            <TouchAppIcon></TouchAppIcon>
          </Box>
          <Box className={[styles.center, styles.night]}>
            <Logo large></Logo>
            <Typography component="h5" variant="h5">
              Touch to start
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
