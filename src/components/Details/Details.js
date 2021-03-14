import React from 'react';
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import useStyles from './styles';

const Details = () => {
  const classes = useStyles();

  return (
    <Card className={classes.income}>
      <CardHeader title={'Income'}/>
      <CardContent>
        <Typography variant="h5">$50</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;