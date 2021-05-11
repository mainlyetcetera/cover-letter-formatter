// how do I use this to use strict typing? 
// import React, { useState, MouseEvent } from 'react'
import React, { useState } from 'react'

interface Props {
  // how do I use this to use strict typing? 
  // addLetter: ((e: { target: { value: React.SetStateAction<string> } }) => void) 
  // addLetter: ((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void) 
  addLetter: any
}

const Form: React.FC<Props> = ({ addLetter }) => {
  const [company, setCompany] = useState<string>('')
  const [why, setWhy] = useState<string>('')
  const [specifics, setSpecifics] = useState<string>('')
  const [numValues, setNumValues] = useState<number>(0)
  const [values, setValues] = useState<string>('')

  const submitInputs = (e: any) => {
    e.preventDefault()
    const data = {
      company, why, specifics, numValues, values
    }

    addLetter(data)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='company name'
        name='company-name'
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <input
        type='text'
        placeholder='why want work here'
        name='why want work here'
        value={why}
        onChange={e => setWhy(e.target.value)}
      />

      <input
        type='text'
        placeholder='specific qualifications'
        name='specific qualifications'
        value={specifics}
        onChange={e => setSpecifics(e.target.value)}
      />

      <input
        type='text'
        placeholder='num values'
        name='num values'
        value={numValues}
        onChange={e => setNumValues(Number(e.target.value))}
      />

      <input
        type='text'
        placeholder='values'
        name='values'
        value={values}
        onChange={e => setValues(e.target.value)}
      />

      <button onClick={e => submitInputs(e)}>SUBMIT</button>
    </form>
  )
}

export default Form
