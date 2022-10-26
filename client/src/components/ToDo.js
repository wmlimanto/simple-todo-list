// main component for each todo item

import React from 'react';
import { 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Typography, 
  IconButton
}from '@mui/material';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const ToDo = ({ title }) => {
  return (
    <div>
      <Container>
        <Card 
          variant="outlined"
          sx={{ mt: 3, background: "#eceff1" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              <IconButton>
                <DoneRoundedIcon sx={{ color: "green" }} />
              </IconButton>
              {title}
              <IconButton sx={{ float: "right" }}>
                <DeleteRoundedIcon sx={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
};

export default ToDo