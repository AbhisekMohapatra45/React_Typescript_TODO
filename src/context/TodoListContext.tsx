import { createContext } from "react";
import { useQuery } from "react-query";
import { TodoTaskCreate } from "../utils/interfaces";

interface TodoContextInterf {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: TodoTaskCreate[] | any;
}

export const TodoListContext = createContext<TodoContextInterf>({
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: [],
});

const TodoListProvider = ({ children }: any) => {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: "todos",
    queryFn: () => {
      const todoList: string | any = localStorage.getItem("todos");
      return JSON.parse(todoList);
    },
  });
  return (
    <TodoListContext.Provider value={{ isLoading, isError, isSuccess, data }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
