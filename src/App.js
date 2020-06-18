import React, {useReducer} from 'react'

import Demo from './components/Demo'

import MonContext from './contexts/context'
import { initialValues, reducer } from './reducers/monReducer'

import './App.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValues)
  return (
    <MonContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Demo />
      </div>
    </MonContext.Provider>
  )
}

export default App
