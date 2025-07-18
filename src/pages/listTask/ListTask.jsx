import { useParams, useNavigate } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../../contexts/TaskContext";
import DropDown from "../../components/DropDown";
import { Button, TextArea } from "@radix-ui/themes";
import TaskFormEdit from "../../components/TaskFormEdit";

export const ListTask = () => {
  const { tasks, removeTask } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const taskListed = tasks.find(task => task.id === id);

  const [title, setTitle] = useState(taskListed?.title || '' );
  const [description, setDescription] = useState(taskListed?.description || '');
  const [status, setStatus] = useState(taskListed?.status || '');
  const [taskPriority, setTaskPriority] = useState(taskListed?.taskPriority);

  useEffect(() => {
    if (taskListed) {
      setTitle(taskListed.title);
      setDescription(taskListed.description);
      setStatus(taskListed.status);
      setTaskPriority(taskListed.taskPriority);
    }
  }, [tasks, id]);

  return (
    <>
      <div className="listTaskContainer">
        <div className="listTaskTitle">
          <h1>{title}</h1>
        </div>
        <div className="listTaskActions">
          <DropDown />
          <TaskFormEdit
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            status={status}
            setStatus={setStatus}
            taskPriority={taskPriority}
            setTaskPriority={setTaskPriority}
          />
          <Button
            variant="solid"
            color="red"
            style={{ maxwidth: "10rem" }}
            size="2"
            onClick={() => {
              removeTask(id, navigate);
            }}
          >
            Deletar atividade
          </Button>

          <Button
              variant="surface"
              color="blue"
              style={{cursor:"pointer", maxwidth: "10rem"}}
              size="2"
              onClick={() => {
                navigate && navigate("/");
              }}
              >
              Concluir
            </Button>
  
        </div>
      </div>
      <div className="listTaskDescription">
        <h3>Descrição</h3>
        <TextArea disabled className="textarea" rows="10" value={description} />
      </div>
        
    </>
  );
};
