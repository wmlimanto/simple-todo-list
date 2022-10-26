// contains form to add new todo item

import React from 'react';
import { 
  FormControl, 
  Container, 
  Grid, 
  TextField, 
  Button, 
  Paper
} from '@mui/material';
import ToDo from './ToDo';

const ToDoForm = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1} component="form">

        <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
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
          <ToDo />
        </Paper>
        </Grid>

      </Grid>
    </Container>
  )
};

export default ToDoForm