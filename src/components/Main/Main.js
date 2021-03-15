import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyle from './style'
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expanse Tracker" subheader="Powered By ABS"/>
      <CardContent>
        <Typography align="center" variant="h5">Total Balance $100 </Typography>
        <Typography variant="subtitle1" style={{ lineHight: '1.5em', marginTop: '20px'}}>
          Try saying: Add Income for $100 in Category Salary for Monday
        </Typography>
        <Divider/>
        <Form/>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;