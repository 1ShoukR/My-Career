
import './App.css';
import {useState} from "react"
import {students, TAs} from "./dummyData"
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import MenuItems from './MenuItems';
import Content from './Content';
import Ad from './Ad';
import ToDoHeader from './ToDoHeader';
import ToDoItems from './ToDoItems';

// hook
// used to change state in functional components
function App() {
  // this is the syntax to create a useState hook
  // const [stateVariable, functionToChangeStateVariable] = useState() (defaultValue for state)
  // const [student, setStudent]
  // const [students, setStudents] = useState([])
  // const [userData, setUserData] = useState({})
  // const [loading, setLoading] = useState(false)
  // const [counter, setCounter] = useState(0);
  // const [mood, setMood] = useState(false)
  const [toDoList, setToDoList] = useState([])
  return (
    <div className="App">
      <h1>To Do list</h1>
      <input type="text"></input>
      <button>Submit</button>
      {/* <h1>To Do List</h1>
      <li>
        {toDoList ? 'done' : 'cookies'}
        {toDoList ? 'done' : 'React'}
        <button onClick = {() => setToDoList(!toDoList)}>Click if Finished</button>
      </li> */}
      {/* <Header/>
      <Footer/>
      <Menu/>
      <Ad/>
      <MenuItems/>
      <MenuItems/>
      <MenuItems/>
      <MenuItems/>
      <MenuItems/>
      <Content/> */}
      {/* <h1>Counter {counter}</h1>
      <button onClick ={() => setCounter(() => counter + 1) }>+</button>
      <button onClick ={() => setCounter(() => counter - 1) }>-</button>

      <h1>How are you feeling today?</h1>
      <h1>{mood ? "smiling face with tear" : "sightly frowning"}</h1>
      <button onClick = {() => setMood(!mood)}>Change Mood</button> */}
    </div>
  );
}

export default App;
