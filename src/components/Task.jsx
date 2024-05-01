import React from 'react'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'


export default function Task({task, deleteTask, togR}){
  return(
    <div 
      className={`task ${task.reminder ? 'reminder': ''}`}
      onDoubleClick={() => togR(task.id)}
      >
      <h3 >
        {task.text} 
        <FaTimes 
          style={{color:'red', cursor: 'pointer'}}
          onClick={() => deleteTask(task.id)}
          />
      </h3>
      <p>{task.day} - {task.reminder ? "true": "false"}</p>
    </div>
  )
}
