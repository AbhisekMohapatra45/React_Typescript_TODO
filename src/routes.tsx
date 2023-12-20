import { Route, Routes } from "react-router-dom";
import InitialOutlet from "./Outlets/InitialOutlet";
import TodoList from "./Pages/TodoList";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<InitialOutlet />}>
        <Route path="" element={<LandingPage />} />
        <Route path="todo-list" element={<TodoList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default routes;
