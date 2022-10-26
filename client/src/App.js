import React from "react";
import { Container } from "@mui/material";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <Container
        maxWidth="xl"
        sx={{
          background: "#fff"
        }}
      >
      <ToDoForm />
    </Container>
  );
}

export default App;
