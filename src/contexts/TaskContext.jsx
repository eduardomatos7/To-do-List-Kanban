import { createContext, useState } from "react";
import Task from "../entities/Task";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
  );

  const addTask = async (task) => {
    setTasks((prevTasks) => {
      const arrayTasks = [...prevTasks, task];
      localStorage.setItem("tasks", JSON.stringify(arrayTasks));
      return arrayTasks;
    });
  };

  const removeTask = async (id, navigate) => {
    if (confirm("Deseja realmente excluir essa tarefa?")) {
      setTasks((prevTasks) =>
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
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((t) => (t.id === id ? updatedTask : t));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, updateTask, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
