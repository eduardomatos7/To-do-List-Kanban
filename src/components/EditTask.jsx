import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskContext from '../contexts/TaskContext';
import { Box, Button, Flex, Text, TextArea, TextField, RadioGroup, Badge } from '@radix-ui/themes';

export default function EditTask() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, addTask } = useContext(TaskContext);
    const taskToEdit = tasks.find(task => task.id === parseInt(id));

    const [title, setTitle] = useState(taskToEdit?.title || '');
    const [description, setDescription] = useState(taskToEdit?.description || '');
    const [status, setStatus] = useState(taskToEdit?.status || 'todo');
    const [taskPriority, setTaskPriority] = useState(taskToEdit?.taskPriority || '');

    const handleSave = (event) => {
        event.preventDefault();
        const updatedTask = { ...taskToEdit, title, description, status, taskPriority };
        addTask(updatedTask);
        navigate('/');
    };

    return (
        <Flex gap='4' direction='column' width='100%'>
            <Text as="h2">Editar tarefa</Text>
            <form onSubmit={handleSave} >
                <Flex direction='column' gap='4' justify='center'>
                    <Box>
                        <Box mb='2'>
                            <Text as="label" htmlFor="title">Título</Text>
                        </Box>
                        <TextField.Root
                            placeholder='Digite o título da tarefa'
                            name="title"
                            id='title'
                            autoFocus
                            value={title}
                            required
                            onInput={(e) => setTitle(e.currentTarget.value)}
                        />
                    </Box>
                    <Box>
                        <Box mb='2'>
                            <Text as="label" htmlFor="description">Descrição</Text>
                        </Box>
                        <TextArea
                            placeholder='Digite a descrição da tarefa'
                            name="description"
                            id="description"
                            value={description}
                            required
                            onInput={(e) => setDescription(e.currentTarget.value)}
                        />
                    </Box>
                    <Flex>
                        <Flex direction="column" mr='3rem'>
                            <Text>Situação:</Text>
                            <RadioGroup.Root name='status' value={status} onValueChange={(value) => setStatus(value)}>
                                <RadioGroup.Item value='todo' ><Badge color='gray'>Pendente</Badge></RadioGroup.Item>
                                <RadioGroup.Item value='doing'><Badge color='yellow'>Realizando</Badge></RadioGroup.Item>
                                <RadioGroup.Item value='done'><Badge color='green'>Concluída</Badge></RadioGroup.Item>
                            </RadioGroup.Root>
                        </Flex>
                        <Flex direction="column">
                            <Text>Prioridade:</Text>
                            <RadioGroup.Root name='priority' value={taskPriority} onValueChange={(value) => setTaskPriority(value)}>
                                <RadioGroup.Item value='low'> <Badge color='cyan'>Low</Badge></RadioGroup.Item>
                                <RadioGroup.Item value='medium'><Badge color='orange'>Medium</Badge></RadioGroup.Item>
                                <RadioGroup.Item value='high' ><Badge color='red'>High</Badge></RadioGroup.Item>
                            </RadioGroup.Root>
                        </Flex>
                    </Flex>
                    <Flex gap='2' justify='end'>
                        <Button type='submit' color='blue' variant='soft'>Salvar</Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    );
}
