/*
company name
why want work there
any people I talked to
general qualification info
specific qualification info
number company values
company values
*/

import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState<string>('')
  const [why, setWhy] = useState<string>('')
  const [specifics, setSpecifics] = useState<string>('')
  const [numValues, setNumValues] = useState<number>(0)
  const [values, setValues] = useState<string>('')

  return (
    <form>
      <input
        type='text'
        placeholder='company name'
        name='company-name'
        value={name}
        onChange={e => setName(e.target.value)}
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

      <button onClick={undefined}>SUBMIT</button>
    </form>
  )
}
