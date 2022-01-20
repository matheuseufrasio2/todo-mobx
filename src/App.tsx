import { TodoInput } from "./components/Todo/TodoInput";
import { TodoList } from "./components/Todo/TodoList";
import { useStore } from "./stores";
import TodoStore from "./stores/TodoStore";

const App = () => {
  return (
    <div className="app">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
