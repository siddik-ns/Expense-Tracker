import React, {useContext, useState} from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyle from './styles';
import {ExpenseTrackerContext} from "../../../context/context";
import {v4 as uuidV4} from 'uuid';

const initialState = {
  amount: 0,
  category: '',
  type: 'Income',
  date: new Date(),
};

const Form = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } =  useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidV4() }
    addTransaction(transaction);
    setFormData(initialState);
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select name="type" value={formData.type} onChange={onChangeHandler}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select name="category" value={formData.category} onChange={onChangeHandler}>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth name="amount" value={formData.amount} onChange={onChangeHandler}/>
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth name="date" value={formData.date} onChange={onChangeHandler}/>
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  );
};

export default Form;