import React, { useState } from 'react'
import Axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'startGettingName':
      return { ...state, loading: true }
    case 'endGettingName':
      return { ...state, name: action.name, loading: false }
    default:
      return state
  }
}

const Demo = () => {
  const initialValues = {
    name: 'Bob',
    loading: false
  }
  const [state, setState] = useState(initialValues)

  const handleClick = () => {
    const action = { type: 'startGettingName' }
    setState(reducer(state, action))
    Axios.get('name.json').then(res => {
      const action = { type: 'endGettingName', name: res.data.name }
      setState(reducer(state, action))
    })
  }
  return (
    state.loading ? <div>Loading...</div> :
      <main>
        <div>{state.name}</div>
        <button onClick={handleClick}>Click Me</button>
      </main>
  )
}

export default Demo