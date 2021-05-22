import React from 'react';
import Todo from './Todo';
const TodoList =({ todos, setTodos , filtertodos})=>{

 
    return(
       <div className="todo-container">
      <ul className="todo-list">
          { filtertodos.map((todo)=>(//dyamically add new field
                  <Todo
                  setTodos={setTodos}
                  todos={todos}
                   key ={todo.id} 
                   todo={todo}
                   text ={todo.text}/>
              ))
          }
      </ul>
     
    </div>
    );
}
export default TodoList;