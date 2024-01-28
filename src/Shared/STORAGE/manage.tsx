import { TodoTaskCreate } from "../../utils/interfaces";

export function createTask(storeData: TodoTaskCreate) {
  try {
    const storedData: TodoTaskCreate[] | any = localStorage.getItem("todos");
    if (storedData) {
      const includeNewTodo: TodoTaskCreate[] = [
        ...JSON.parse(storedData),
        storeData,
      ];
      localStorage.setItem("todos", JSON.stringify(includeNewTodo));
    } else {
      localStorage.setItem("todos", JSON.stringify([storeData]));
    }
    return true;
  } catch (error) {
    console.log({ error });
  }
}
