import React from 'react'
import PropTypes from 'prop-types'

export default function Button({color, text, onClickPassedtoButton}){
  return(
    <button 
      onClick={onClickPassedtoButton}
      style={{backgroundColor: color}} className='btn'>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  onClickPassedtoButton: onClickIfNothingPassed,
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClickPassedtoButton: PropTypes.func,
}

function onClickIfNothingPassed(){
  console.log('Nothing passed')
}