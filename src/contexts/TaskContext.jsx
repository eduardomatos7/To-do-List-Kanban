import { createContext, useState } from "react";
import Task from "../entities/Task";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {/*TESTES
            new Task(1, 'Tarefa 1', 'Descrição da tarefa 1', 'todo', 'low'), 
        new Task(2, 'Tarefa 2', 'Descrição da tarefa 2', 'doing', 'medium'), 
        new Task(3, 'Tarefa 3', 'Descrição da tarefa 3', 'done', 'high')]);
    */}]);
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    /*const removeTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }*/

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;