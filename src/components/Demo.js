import React, { useReducer, useContext } from 'react'
import Axios from 'axios'

import { initialValues, reducer } from '../reducers/monReducer'

const MonContext = React.createContext(null)

const Demo = () => {
  const [{ name, loading }, dispatch] = useReducer(reducer, initialValues)

  return (
    <MonContext.Provider value={dispatch}>
      <ChildComponent name={name} loading={loading} />
    </MonContext.Provider>
  )
}

export default Demo

const ChildComponent = ({ name, loading }) => {
  const dispatch = useContext(MonContext)
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