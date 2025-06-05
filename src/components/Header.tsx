import React, { useContext } from 'react'
import CreateTaskForm from './CreateTaskForm'
import TaskContext from '../contexts/TaskContext'

function Header() {
    const {setSearchQuery, searchQuery} = useContext(TaskContext)
  return (
        <div className="header">
          <h2>Kanban</h2>
          <div className="groupIB">
            <input type="text" placeholder='Buscar...' value={searchQuery} onChange={(ev) => setSearchQuery(ev.target.value)}></input>
            <CreateTaskForm />
          </div>
        </div>  )
}

export default Header