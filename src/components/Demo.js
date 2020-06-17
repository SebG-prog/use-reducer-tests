import React, { useReducer } from 'react'
import Axios from 'axios'

import {initialValues, reducer} from '../reducers/monReducer'

const Demo = () => {
  const [{name, loading}, dispatch] = useReducer(reducer, initialValues)

  return (
    <ChildComponent name={name} loading={loading} dispatch={dispatch}/>
  )
}

export default Demo

const ChildComponent = ({name, loading, dispatch}) => {
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