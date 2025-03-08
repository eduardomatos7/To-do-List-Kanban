import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import TaskContext  from "../../contexts/TaskContext";
import DropDown from "../../components/DropDown";
import { Button, TextArea } from "@radix-ui/themes";

export const ListTask = () => {
  const { tasks } = useContext(TaskContext);
  const { id } = useParams();
  const taskListed = tasks.find(task => task.id === parseInt(id));
  const [title, setTitle] = useState(taskListed?.title || '');
  const [description, setDescription] = useState(taskListed?.description || '');
  const [status, setStatus] = useState(taskListed?.status || 'todo');
  const [taskPriority, setTaskPriority] = useState(taskListed?.taskPriority || '');

  return (
    <>
    <div className="listTaskContainer">
      <div className="listTaskTitle">
        <h1>{title}</h1>
      </div>
      <div className="listTaskActions">
        <DropDown />
        <Button variant="solid" color="red" size='2'>Deletar atividade</Button>
        <Button variant="surface" color="gray" size='2'>Editar informações</Button>
      </div>

    </div>
    <div className="listTaskDescription">
      <h3>Descrição</h3>
      <TextArea disabled className="textarea">{description}</TextArea>
    </div>
    </>
  );
}