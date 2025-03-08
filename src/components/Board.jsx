import Task from "../entities/Task";
import React, { useContext } from 'react';
import TaskContext from "../contexts/TaskContext.jsx";
import { Link } from 'react-router-dom';

export default function Board({ titleTodo }) {
    const { tasks } = useContext(TaskContext);
    const { removeTask } = useContext(TaskContext)
    const statusMap = {
        'Pendente': 'todo',
        'Realizando': 'doing',
        'Concluída': 'done'
    };

    const filteredTasks = tasks.filter(task => task.status === statusMap[titleTodo]);

    return (
        <div className="boardColumn">
            <h3>{titleTodo}</h3>
            {filteredTasks.map(task => (
                 <Link to={`/listTask/${task.id}`} style={{ textDecoration: 'none', color: '#fff' }} key={task.id}>
                    <div className={`${statusMap[titleTodo]}-bg`} key={task.id}>
                        {console.log(statusMap[titleTodo])}
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                        {task.taskPriority && <p className="namePriority">{task.taskPriority.charAt(0).toUpperCase() + task.taskPriority.slice(1)}</p>}
                        {/* <button > Editar</button> 
                        <button onClick={
                            () => {removeTask(task.id)}
                            }>Excluir</button> */}
                    </div>
                 </Link>
            ))}
        </div>
    );
}
