import React, { useState } from "react";
import { Container } from "@mui/material";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  // state to manage todo list items
  const [todos, setTodos] = useState ([
    {
      id: 1,
      title: "test task 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "test task 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "test task 3",
      isCompleted: false,
    }
  ]);

  return (
    <Container
        maxWidth="xl"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "#fff"
        }}
      >
      <ToDoForm />
      <ToDoList todos={todos} />
    </Container>
  );
}

export default App;
