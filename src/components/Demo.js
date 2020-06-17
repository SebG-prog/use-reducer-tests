import React, { useReducer } from 'react'
import Axios from 'axios'

import {initialValues, reducer} from '../reducers/monReducer'

const Demo = () => {

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