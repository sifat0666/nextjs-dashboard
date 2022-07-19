import React from 'react'

const Button = ({color, bgColor, borderRadius, text, size}: {
  color: string
  bgColor: string
  borderRadius: string
  text: string
  size: string
}) => {
  return (
    
    <button 
      type='button' 
      style={{backgroundColor: bgColor, color, borderRadius  }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button