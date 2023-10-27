import Header from "./component/Header";
import Content from "./component/Content";
import { TodoProvider } from "./TodoContext";


function App() {
  return (
    <TodoProvider>
      <Header/>
      <Content/>
    </TodoProvider>
  );
}

export default App;
