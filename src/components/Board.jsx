import Task from "../entities/Task";
import React, { useContext } from 'react';
import TaskContext from "../contexts/TaskContext.jsx";

export default function Board({ titleTodo }) {
    const { tasks } = useContext(TaskContext);

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
                <div key={task.id}>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    );
}
