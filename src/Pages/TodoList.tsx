import { Container, styled } from "@mui/material";
import React, { useContext } from "react";
import TaskCard from "../Components/TaskView/TaskCard";
import { TodoListContext } from "../context/TodoListContext";

const TodoListBackGround = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(5),
}));

interface TodoState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: any;
}

function TodoList(): React.JSX.Element {
  const { isLoading, isError, isSuccess, data }: TodoState =
    useContext(TodoListContext);
  console.log(isLoading, isSuccess, isError, data);
  return (
    <TodoListBackGround>
      <Container maxWidth="md">
        <TaskCard taskName="Hello Abhisek DO This By EOD" />
      </Container>
    </TodoListBackGround>
  );
}

export default TodoList;
