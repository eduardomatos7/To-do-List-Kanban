import { useParams, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import TaskContext  from "../../contexts/TaskContext";
import DropDown from "../../components/DropDown";
import { Button, TextArea } from "@radix-ui/themes";
import TaskFormEdit from "../../components/TaskFormEdit";
import { TaskProvider } from "../../contexts/TaskContext";


export const ListTask = () => {
  const { tasks, removeTask } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const taskListed = tasks.find(task => task.id === id);
  const [title, setTitle] = useState(taskListed?.title || '');
  const [description, setDescription] = useState(taskListed?.description || '');
  const [status, setStatus] = useState(taskListed?.status || 'todo');
  const [taskPriority, setTaskPriority] = useState(taskListed?.taskPriority || '');

  return (
    <>
    <TaskProvider>
    <div className="listTaskContainer">
      <div className="listTaskTitle">
        <h1>{title}</h1>
      </div>
      <div className="listTaskActions">
        <DropDown />
        <Button variant="solid" color="red" size='2' onClick={() => {removeTask(id, navigate)}}>Deletar atividade</Button>

        <TaskFormEdit
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        status={status}
        setStatus={setStatus}
        taskPriority={taskPriority}
        setTaskPriority={setTaskPriority}/>
      </div>

    </div>
    <div className="listTaskDescription">
      <h3>Descrição</h3>
      <TextArea disabled className="textarea" value={description}/>
    </div>
    </TaskProvider>
    </>
  );
}