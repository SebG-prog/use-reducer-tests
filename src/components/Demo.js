import React, { useState } from 'react'
import Axios from 'axios'

const reducer = () => {
  switch () {
    case '':
      return
    case '':
      return
    default
      return
  }
}

const Demo = () => {
  const initialValues = {
    name: 'Bob',
    loading: false
  }
  const [state, setState] = useState(initialValues)

  const handleClick = () => {
    // action 'startGettingName'
    setState({...state, loading: true})
    Axios.get('name.json').then(res => {
      // action 'endGettingName'
      setState({...state, name: res.data.name, loading: false})
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