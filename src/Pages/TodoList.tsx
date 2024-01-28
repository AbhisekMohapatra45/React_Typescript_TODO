import { Box, Container, styled } from "@mui/material";
import React, { useContext } from "react";
import TaskCard from "../Components/TaskView/TaskCard";
import { TodoListContext } from "../context/TodoListContext";
import { TodoTaskCreate } from "../utils/interfaces";

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
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
          {data?.map(({ id, taskName }: TodoTaskCreate) => (
            <TaskCard key={id} taskName={taskName} />
          ))}
        </Box>
      </Container>
    </TodoListBackGround>
  );
}

export default TodoList;
