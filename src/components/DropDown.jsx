import React, { useEffect } from 'react'
import { DropdownMenu, Button, Badge } from "@radix-ui/themes"
import { useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';
import { useParams } from 'react-router-dom';


export default function DropDown () {
    const {tasks, updateTask} = useContext(TaskContext);
    const { id } = useParams();
    const taskListed = tasks.find(task => task.id === id);
    const [status, setStatus] = useState(taskListed?.status || 'todo');
    const statusMap = {
        'todo': 'Pendente',
        'doing': 'Realizando',
        'done': 'Concluída'
    };
 
    const handleStatusChange = async (newStatus) => {
      setStatus(newStatus);
      const updatedTask = { ...taskListed, status: newStatus };
      await updateTask(id, updatedTask);
  };
  return (
  <DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button 
    variant='outline'
    color='gray' 
    size='2' 
    style={{maxwidth: "10rem", display: 'flex', justifyContent: 'space-between'}}>
			{statusMap[status]}
			<DropdownMenu.TriggerIcon />
		</Button >
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		
		<DropdownMenu.Item shortcut="🕓" onClick={()=> {handleStatusChange('todo')}}><Badge color="gray">Pendente</Badge></DropdownMenu.Item>
		<DropdownMenu.Item shortcut="🔄" onClick={()=> {handleStatusChange('doing')}}><Badge color="yellow">Realizando</Badge></DropdownMenu.Item>
		<DropdownMenu.Item shortcut="✅" onClick={()=> {handleStatusChange('done')}}><Badge color="green">Concluída</Badge></DropdownMenu.Item>

	</DropdownMenu.Content>
</DropdownMenu.Root>

  )
}

