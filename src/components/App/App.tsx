// how do I use this to use strict typing? 
// import React, { useState, MouseEvent } from 'react'
import React, { useState } from 'react'
import './App.css'
import Form from '../Form/Form'
import template from '../../template/template'
import addDetails from '../../template/addDetails'
import * as types from '../../types/types'

function App() {
  const [letter, setLetter] = useState<string>('')

  const addLetter = (details: types.data) => {
    setLetter(addDetails(details))
  }

  return (
    <div className="App">
      App
      <Form addLetter={addLetter} />
      <textarea
        className='result'
        placeholder='result'
        name='result'
        readOnly={true}
        value={letter}
      />
    </div>
  )
}

export default App
