import React from "react";
import { Container } from "@mui/material";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <Container
        maxWidth="xl"
        sx={{
          background: "#fff"
        }}
      >
      <ToDoForm />
      <ToDoList />
    </Container>
  );
}

export default App;
