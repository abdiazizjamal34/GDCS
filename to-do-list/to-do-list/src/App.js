import React, {useEffect, useState} from 'react';
import './App.css';
import Task from './Task';
import Taskform from './Taskform';

function App() {
  const[tasks, setTasks] = useState([]);
  useEffect( () => { 
   if(tasks.length === 0) return
     localStorage.setItem('tasks' ,JSON.stringify(tasks));
    
  } ,[tasks]);
  useEffect( () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks) {
      setTasks(tasks);
    }
  },[]);

  function deleteTask(indexrRemove){
    setTasks(preve =>{
      return preve.filter((taskObject,index) => index !== indexrRemove)
      
    });
  }
  function addTask(name) {
    setTasks( prev =>{
      return [...prev, { name:name,done:false}];
    })
  
  }
  function updateTask(taskIndex, newdone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newdone;
      return newTasks;
    })
   
  }
  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;
  return (
    <main> 
          <h1> {numberComplete}/{numberTotal} Completed</h1>
      <Taskform onAdd ={addTask}/>
      {tasks.map((task, index) => (
  <Task  {...task}  onToggle={done => updateTask(index, done)}
     onDelete={ () => deleteTask(index)} />
))}
    </main>

  );
}

export default App;
