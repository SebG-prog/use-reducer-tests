import React, { useReducer } from 'react'
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
  const [state, setState] = useReducer(reducer, initialValues)

  const handleClick = () => {
    const action = { type: 'startGettingName' }
    setState(action)
    Axios.get('name.json').then(res => {
      const action = { type: 'endGettingName', name: res.data.name }
      setState(action)
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