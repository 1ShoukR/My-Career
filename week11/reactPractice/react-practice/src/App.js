import { useState } from "react"
import './App.css';
import Button from "./components/Button";
import Form from "./components/Form";
import ToS from "./components/ToS";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <div>
        <Form />
      </div>
      <div>
        <Button />
      </div>
      <div>
        <ToS />
      </div>
    </div>
  );
}

export default App;
