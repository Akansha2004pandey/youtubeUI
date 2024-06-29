import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-2 shadow-xl'>
      <img class="h-10" src="/src/images/user.png" alt="user"></img>
      <span className='px-2 font-bold '>{name}</span>
      <span className=''>{message}</span>
    </div>
  )
}

export default ChatMessage
