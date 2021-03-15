import React from 'react';
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import useStyles from './styles';

const Details = (props) => {
  const classes = useStyles();
  const {title} = props;
  return (
    <Card className={title == 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title}/>
      <CardContent>
        <Typography variant="h5">$50</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;