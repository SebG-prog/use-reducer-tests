import React, { useState } from 'react'
import Axios from 'axios'

const Demo = () => {
  const [name, setName] = useState('Bob')
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    Axios.get('name.json').then(res => {
      setName(res.data.name)
      setLoading(false)
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