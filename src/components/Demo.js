import React, { useState } from 'react'
import Axios from 'axios'

const Demo = () => {
  const initialValues = {
    name: 'Bob',
    loading: false
  }
  const [state, setState] = useState(initialValues)

  const handleClick = () => {
    setState({...state, loading: true})
    Axios.get('name.json').then(res => {
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