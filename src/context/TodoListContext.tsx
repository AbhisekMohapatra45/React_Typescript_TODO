import { createContext } from "react";
import { useQuery } from "react-query";
interface TodoList {
  id: string;
  taskName: string;
}

interface TodoContextInterf {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: TodoList[] | any;
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
      setTimeout(() => {
        return localStorage.getItem("todoList");
      }, 3000);
    },
  });
  return (
    <TodoListContext.Provider value={{ isLoading, isError, isSuccess, data }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
