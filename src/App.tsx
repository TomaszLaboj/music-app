import { useState } from 'react'
import './App.css'
import KeysTable from './components/KeysTable';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>Music theory</div>
      <KeysTable />
    </>
  )
}

export default App
