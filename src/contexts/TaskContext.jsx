import { createContext, useEffect, useState } from "react";
import Task from "../entities/Task";
import { getData, postData, deleteData } from "../services/api";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getData().then((data) => 
            {setTasks(data.map(task => new Task(task.id, task.title, task.description, task.status, task.taskPriority)));}
    );
    }, [])

    const addTask = (task) => {
        setTasks([...tasks, task]);
        postData(task)
    };
    const removeTask = async (id, navigate) => {
        const newTasks = tasks.filter((taskListed) => taskListed.id !== id);
        if (confirm('Deseja realmente excluir essa tarefa?')) {
            await deleteData(id);
            setTasks(newTasks);
            (navigate) && navigate('/');
            
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;