import { useEffect, useState } from "react";
import Form from "./Form";
import './index.css'
import TodoList from "./TodoList";


function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  
  return (
    <div className="app">
      <div className="app-wrapper">
        <header className="app-header">
          <h1>To-Do List</h1>
        </header>
        
        <Form input={input}
          setInput = {setInput}
          todos={todos}
          setTodos ={setTodos}
          editTodo={editTodo}
          setEditTodo ={setEditTodo}
        />
        <TodoList
          // input={input}
          // setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
        
        
      </div>
      <div>
      
      </div>
      
    </div>
  );
}

export default App;
