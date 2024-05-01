import React from "react";
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'


// Import the Home page component
// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function App() {
  const [tasks, setTasks] = useState([
   {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
])
  
  // Add Task
  function addTask(task){
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  
  // Delete Task
  function delTask(id){
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle reminder
  function togReminder(id){
     setTasks(
       tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
     )
  }
  
  return (
    <div className='container'>
      <Header title='Testing'/>
      <AddTask addT={addTask}/>
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          deleteT={delTask}
          togRem={togReminder}
        />
      ) : 
      ('No Tasks To Show')}
      
    </div>
  );
}
