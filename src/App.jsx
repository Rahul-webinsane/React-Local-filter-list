import { useState } from 'react'
import { Searchcontainer } from './components/searchbar/searchcontainer'


function App() {
  const [count, setCount] = useState(0)

  return (
     <Searchcontainer/>
  )
}

export default App
