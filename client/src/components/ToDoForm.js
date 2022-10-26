import React from 'react';
import { FormControl, Container, Grid, TextField, Button }from '@mui/material';

const ToDoForm = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1} component="form">
        <Grid item xs={12}>
          <FormControl fullWidth={true}>
            <TextField 
              label="add a new task" 
              variant="standard" 
              required={true}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit"
              sx={{ mt: 1 }}
            >
              add
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  )
};

export default ToDoForm