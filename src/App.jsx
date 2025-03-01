import CreateTaskForm from './components/CreateTaskForm'
import Board from './components/Board'

function App() {

  return (
    <div className="container">
      <div className="header">
        <h2>Kanban</h2>
        <div className="groupIB">
          <input placeholder='Buscar...'></input>
          <CreateTaskForm />
        </div>
      </div>
      <div className="boards">
        <Board titleTodo="Pendente" />
        <Board titleTodo="Realizando" />
        <Board titleTodo="Concluída" />
      </div>
    </div>
  )
}

export default App
