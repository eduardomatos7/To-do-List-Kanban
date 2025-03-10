import { createContext, useEffect, useState } from "react";
import Task from "../entities/Task";
import { getData, postData, deleteData, putData } from "../services/api";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getData().then((data) => 
            {setTasks(data.map(task => new Task(task.id, task.title, task.description, task.status, task.taskPriority)));}
    );
    }, [])

    const addTask = async (task) => {
        setTasks([...tasks, task]);
        await postData(task)

    };
    const removeTask = async (id, navigate) => {
        const newTasks = tasks.filter((taskListed) => taskListed.id !== id);
        if (confirm('Deseja realmente excluir essa tarefa?')) {
            await deleteData(id);
            setTasks(newTasks);
            (navigate) && navigate('/');
            
        }
    }
    const updateTask = async (id, task) => {
        let taskUpdate = tasks.find(task => task.id === id);
        taskUpdate = {
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            taskPriority: task.taskPriority
        }
        const updatedTask = new Task(taskUpdate.id, taskUpdate.title, taskUpdate.description, taskUpdate.status, taskUpdate.taskPriority);
        await putData(updatedTask);
        
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask, setTasks }}>
            {children}
        </TaskContext.Provider>
    ) };

export default TaskContext;