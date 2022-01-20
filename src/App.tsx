import { TodoInput } from "./components/Todo/TodoInput";
import { TodoList } from "./components/Todo/TodoList";
import TodoStore from "./stores/TodoStore";

const todos = new TodoStore();

const App = () => {
  return (
    <div className="app">
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
