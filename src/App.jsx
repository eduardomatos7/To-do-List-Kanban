import { Button } from '@radix-ui/themes'
import { useState } from 'react'
import CreateTaskForm from './components/CreateTaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h2>Kanban</h2>
        <div className="groupIB">
          <input placeholder='Buscar...'></input>
          <CreateTaskForm />
          
        </div>
        
        
        </div>
        
    </>
  )
}

export default App
