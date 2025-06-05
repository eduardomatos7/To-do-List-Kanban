import Board from './components/Board'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className="container">
        <Header/>
        <div className='full-w-boards'>
          <div className="boards">
            <Board titleTodo="Pendente" />
            <Board titleTodo="Realizando" />
            <Board titleTodo="Concluída" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
