import { createContext, useEffect, useState } from "react";
import Task from "../entities/Task";
import { getData, postData, deleteData, putData } from "../services/api";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getData().then((data) => 
            {setTasks(data.map(task => new Task(task.id, task.title, task.description, task.status, task.taskPriority)));});
    }, [])

    const addTask = async (task) => {
        await postData(task);
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const removeTask = async (id, navigate) => {
        if (confirm('Deseja realmente excluir essa tarefa?')) {
            await deleteData(id);
            setTasks(prevTasks => prevTasks.filter((taskListed) => taskListed.id !== id));
            (navigate) && navigate('/');
        }
    }

    const updateTask = async (id, task) => {
        const updatedTask = new Task(task.id, task.title, task.description, task.status, task.taskPriority);
        await putData(updatedTask);
        setTasks(prevTasks => prevTasks.map(t => t.id === id ? updatedTask : t));
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask, setTasks }}>
            {children}
        </TaskContext.Provider>
    ) };

export default TaskContext;