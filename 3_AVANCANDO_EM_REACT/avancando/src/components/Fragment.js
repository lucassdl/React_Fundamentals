import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
        <h1>Primeiro parágrafo</h1>
        <h2>Segundo parágrafo</h2>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment