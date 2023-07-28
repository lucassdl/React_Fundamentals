import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
  const messages = ["Oi", "Olá", "Oi, tudo bem?"];
  
    return (
    <div>
        <p><button onClick={() => handleMessage(messages[0])}>Message 1</button></p>
        <p><button onClick={() => handleMessage(messages[1])}>Message 2</button></p>
        <p><button onClick={() => handleMessage(messages[2])}>Message 3</button></p>
    </div>
  )
}

export default ChangeMessageState