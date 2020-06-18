import React, {useContext} from 'react'
import Axios from 'axios'

import MonContext from '../contexts/context'

const ChildComponent = () => {
  const [{name, loading}, dispatch] = useContext(MonContext)
  
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

export default ChildComponent