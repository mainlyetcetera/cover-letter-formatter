// how do I use this to use strict typing? 
// import React, { useState, MouseEvent } from 'react'
import React, { useState } from 'react'
import './App.css'
import Form from '../Form/Form'
import template from '../../template/template'
import addDetails from '../../template/addDetails'

type data = {
  company: string
  why: string
  specifics: string
  numValues: number
  values: string
}

function App() {
  const [letter, setLetter] = useState<string>('')

  const addLetter = (details: data) => {
    setLetter(`${details.company}`)
  }

  return (
    <div className="App">
      App
      <Form addLetter={addLetter} />
      <input
        type='text'
        placeholder='specific qualifications'
        name='specific qualifications'
        readOnly={true}
        value={template}
      />
    </div>
  )
}

export default App
