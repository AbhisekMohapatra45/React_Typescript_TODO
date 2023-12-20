import { Card, CardContent, Container, Paper, styled } from "@mui/material";
import React from "react";

const TodoListBackGround = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(5),
}));

function TodoList(): React.JSX.Element {
  return (
    <TodoListBackGround>
      <Container maxWidth="md">
        <Card variant="outlined" component={Paper}>
          <CardContent></CardContent>
        </Card>
      </Container>
    </TodoListBackGround>
  );
}

export default TodoList;
