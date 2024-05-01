import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'


export default function Tasks({tasks, deleteT, togRem}){
  
  return(
    <>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          deleteTask={deleteT}
          togR={togRem}
          />
      ))}
    </>
      
   
  )
}

// Tasks.defaultProps = {
  
// }

// Tasks.propTypes = {
  
// }

