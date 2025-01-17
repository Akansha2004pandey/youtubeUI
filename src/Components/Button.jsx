import React from 'react'

const Button = (props) => {
    const {name}=props;
  return (
    <div>
      <button className="px-5 m-3 py-1 bg-gray-200 rounded-md">{name}</button>
    </div>
  )
}

export default Button;
