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
  const [{name, loading}, dispatch] = useReducer(reducer, initialValues)

  const handleClick = () => {
    dispatch({ type: 'startGettingName' })
    Axios.get('name.json').then(res => {
      dispatch({ type: 'endGettingName', name: res.data.name })
    })
  }
  return (
    loading ? <div>Loading...</div> :
      <main>
        <div>{name}</div>
        <button onClick={handleClick}>Click Me</button>
      </main>
  )
}

export default Demo