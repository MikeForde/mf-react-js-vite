import React from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'

export default function Header({title}){
  function onClickinHeader(e){
    console.log(e);
  }
  
  return(
    <header className='header'>
      <h1>Task Tracker - {title}</h1>
      <Button text='Add' onClickPassedtoButton={onClickinHeader}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Default',
}

Header.propTypes = {
  title: PropTypes.string,
}