import React, {useState} from 'react';
import './App.css';
import Task from './Task';
import Taskform from './Taskform';

function App() {
  const[tasks, setTasks] = useState([]);
  function addTask(name) {
    setTasks( prev =>{
      return [...prev, { name:name,done:false}];
    })
  
  }
  return (
    <main> 

      <Taskform onAdd ={addTask}/>
     {tasks.map(tasks => (
      <Task{...tasks}/>
     ))}
    </main>

  );
}

export default App;
