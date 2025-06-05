import { createContext, useEffect, useState } from "react";
import Task from "../entities/Task";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskss, setTaskss] = useState(
    localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
  );
  const [searchQuery, setSearchQuery] = useState("")
  
  const tasks = taskss.filter((task) => task.title.includes(searchQuery))


  const addTask = async (task) => {
    setTaskss((prevTasks) => {
      const arrayTasks = [...prevTasks, task];
      localStorage.setItem("tasks", JSON.stringify(arrayTasks));
      return arrayTasks;
    });
  };

  const removeTask = async (id, navigate) => {
    if (confirm("Deseja realmente excluir essa tarefa?")) {
      setTaskss((prevTasks) =>
        {
      const tasksCurrent = prevTasks.filter((taskListed) => taskListed.id !== id)
      localStorage.setItem("tasks", JSON.stringify(tasksCurrent))
      return tasksCurrent
    }
      );
      navigate && navigate("/");
    }
  };

  const updateTask = async (id, task) => {
    const updatedTask = new Task(
      task.id,
      task.title,
      task.description,
      task.status,
      task.taskPriority
    );
    setTaskss((prevTasks) => {
      const updatedTasks = prevTasks.map((t) => (t.id === id ? updatedTask : t));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };




  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, updateTask, setTaskss, setSearchQuery, searchQuery }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
