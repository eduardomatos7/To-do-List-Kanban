import React, { useState, useContext } from 'react';
import Task from '../entities/Task';
import { Box, Button, Dialog, Flex, Text, TextArea, TextField, RadioGroup, Badge } from '@radix-ui/themes';
import TaskContext from '../contexts/TaskContext';

export default function CreateTaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');
    const [taskPriority, setTaskPriority] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleSave = (event) => {
        event.preventDefault();
        const newTask = new Task(Date.now(), title, description, status, taskPriority);
        addTask(newTask);
        console.log('Task saved:', newTask);
        setTitle('');
        setDescription('');
        setStatus('');
        setTaskPriority('');
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setTitle('');
        setDescription('');
        setStatus('');
        setTaskPriority('');
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <button>Nova atividade</button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth='28rem'>
                <Flex gap='4' direction='column' width='100%'>
                    <Dialog.Title>Nova tarefa</Dialog.Title>
                    <Dialog.Description>
                        Preencha os detalhes abaixo para criar uma nova tarefa.
                    </Dialog.Description>
                    <form onSubmit={handleSave} onReset={handleCancel}>
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
                                    <RadioGroup.Root name='status' onValueChange={(value) => setStatus(value)}>
                                        <RadioGroup.Item value='todo' ><Badge color='gray'>Pendente</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='doing'><Badge color='yellow'>Realizando</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='done'><Badge color='green'>Concluída</Badge></RadioGroup.Item>
                                    </RadioGroup.Root>
                                </Flex>
                                <Flex direction="column">
                                    <Text>Prioridade:</Text>
                                    <RadioGroup.Root name='priority' onValueChange={(value) => setTaskPriority(value)}>
                                        <RadioGroup.Item value='low'> <Badge color='cyan'>Low</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='medium'><Badge color='orange'>Medium</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='high' ><Badge color='red'>High</Badge></RadioGroup.Item>
                                    </RadioGroup.Root>
                                </Flex>
                            </Flex>
                            <Flex gap='2' justify='end'>
                                <Dialog.Close>
                                    <Button type='reset' color='gray' variant='soft'>Cancelar</Button>
                                </Dialog.Close>
                                <Dialog.Close>
                                    <Button type='submit' color='blue' variant='soft'>Salvar</Button>
                                </Dialog.Close>
                            </Flex>
                        </Flex>
                    </form>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
}