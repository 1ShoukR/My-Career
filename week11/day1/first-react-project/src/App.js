
import "./App.css";
import { useState } from "react";
import { students, tas } from "./dummydata";
import Header from "./Header";
import Footer from "./Footer";
// hooks
// to change state in functional components
function App() {
  // this is the syntax to create a useState hook
  // const [stateVariable, functionToChangeTheStateVariable] = useState(defaultValue for state)
  // const [students, setStudents] = useState([])
  // const [userData, setUserData] = useState({})
  // const [loading,setLoading] = useState(false)
  const [counter, setCounter] = useState(0);
  const [mood, setMood] = useState(false);
  const [todo, setTodo] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const addTodo = () => {
    setTodo([...todo, todoItem]);
    setTodoItem("");
  };

  const deleteTodo = (item) => {
    const filtereditemList = todo.filter((todo) => todo !== item);
    setTodo(filtereditemList);
  };

  return (
    <div className="App">
      <Header />
      <Footer />
      {/* <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(() => counter + 1)}>+</button>
      <button onClick={() => setCounter(() => counter - 1)}>-</button>
      <h1>How are you feeling today?</h1>
      <h1>{mood ? "🥲" : "🙁"}</h1>
      <button onClick={() => setMood(!mood)}>Change Mood</button> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      <h1>Add todo item</h1>
      <input
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        type="text"
      />
      <button onClick={() => addTodo()}>Submit</button>
      {todo.map((todo) => (
        <>
          <p>{todo}</p>
          <button onClick={() => deleteTodo(todo)}>x</button>
        </>
      ))}
    </div>
  );
}

export default App;

/* <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(() => counter + 1)}>+</button>
      <button onClick={() => setCounter(() => counter - 1)}>-</button>
      <h1>How are you feeling today?</h1>
      <h1>{mood ? "🥲" : "🙁"}</h1>
      <button onClick={() => setMood(!mood)}>Change Mood</button> */