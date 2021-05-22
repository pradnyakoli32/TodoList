/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react';
import './App.css';
//importing of components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  // eslint-disable-next-line no-unused-vars

 
 
 
  //function
  
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]=useState([]);
  const [status,setStatus]=useState(["all"]);
  const [filtertodos,setFiltertodos]=useState([]);
 
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },
  [todos,status]);
    const filterHandler=()=>{
      switch(status){
        case "completed":
        setFiltertodos(todos.filter((todo )=>todo.completed === true));
        break;
        case "uncompleted":
        setFiltertodos(todos.filter((todo) => todo.uncompleted === false));
        break;
        default:
        setFiltertodos(todos);
        break;
        
      }
    };
    const saveLocalTodos = () =>{
      if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocalTodos =()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <div className="App">
      
      <Form todos ={todos}
       setTodos ={setTodos} 
       setInputText={setInputText}
       status={status}
       setStatus={setStatus}
       inputText={inputText} 
       
       setFiltertodos={setFiltertodos}/>
      <TodoList filtertodos={filtertodos} setTodos ={setTodos} todos={todos} />
    </div>
  );
}

export default App;
