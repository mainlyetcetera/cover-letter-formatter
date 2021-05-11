// import React, { useState, MouseEvent } from 'react'
import React, { useState } from 'react'
import './App.css'
import Form from '../Form/Form'

function App() {
  const [letter, setLetter] = useState<string>('')

  function handleClick(e: any) {
    e.preventDefault()
    // console.log(e)
    setLetter(e.target.value)
  }

  return (
    <div className="App">
      App
      <Form handleClick={handleClick} />
      <input
        type='text'
        placeholder='specific qualifications'
        name='specific qualifications'
        value={letter}
        onChange={e => setLetter(e.target.value)}
      />
    </div>
  )
}

export default App
