import React from 'react'
import { DropdownMenu, Button, Badge } from "@radix-ui/themes"
import { useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';
import { useParams } from 'react-router-dom';


export default function DropDown () {
    const {tasks} = useContext(TaskContext);
    const { id } = useParams();
    const taskListed = tasks.find(task => task.id === parseInt(id));
    const [status, setStatus] = useState(taskListed?.status || 'todo');
    const statusMap = {
        'todo': 'Pendente',
        'doing': 'Realizando',
        'done': 'Concluída'
    };
  return (
    <DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button variant='outline' color='gray' size='2' style={{width: '10rem', display: 'flex', justifyContent: 'space-between'}}>
			{statusMap[status]}
			<DropdownMenu.TriggerIcon />
		</Button >
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		
		<DropdownMenu.Item shortcut="🕓"><Badge color="gray">Pendente</Badge></DropdownMenu.Item>
		<DropdownMenu.Item shortcut="🔄"><Badge color="yellow">Realizando</Badge></DropdownMenu.Item>
		<DropdownMenu.Item shortcut="✅"><Badge color="green">Concluída</Badge></DropdownMenu.Item>

	</DropdownMenu.Content>
</DropdownMenu.Root>

  )
}

