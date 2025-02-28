import React, { useState } from 'react';
import Task from '../entities/Task';
import { Box, Button, Dialog, Flex, Text, TextArea, TextField, RadioGroup, Badge } from '@radix-ui/themes';


export default function CreateTaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [taskPriority, setTaskPriority] = useState('');

    const handleSave = () => {
        const newTask = new Task(Date.now(), title, description, status, taskPriority);
        console.log('Task saved:', newTask);
        // Add logic to save the task
    };

    const handleCancel = () => {
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
                    <form>
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
                                    onInput={(e) => setDescription(e.currentTarget.value)}
                                />
                            </Box>
                            <Flex>
                                <Flex direction="column" mr='3rem'>
                                    <Text>Situação:</Text>
                                    <RadioGroup.Root name='status' defaultValue='todo'>
                                        <RadioGroup.Item value='todo'><Badge color='gray'>Pendente</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='doing'><Badge color='yellow'>Realizando</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='done'><Badge color='green'>Concluída</Badge></RadioGroup.Item>
                                    </RadioGroup.Root>
                                    </Flex>
                                    <Flex direction="column">
                                    <Text>Prioridade:</Text>
                                    <RadioGroup.Root name='status' defaultValue='todo'>
                                        <RadioGroup.Item value='low'> <Badge color='cyan'>Low</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='medium'><Badge color='orange'>Medium</Badge></RadioGroup.Item>
                                        <RadioGroup.Item value='high'><Badge color='red'>High</Badge></RadioGroup.Item>
                                    </RadioGroup.Root>
                                    </Flex>
                                    </Flex>
                                
                                
                            <Flex gap='4' justify='end'>
                                <Dialog.Close>
                                    <Button color='gray' variant='soft'>Cancelar</Button>
                                </Dialog.Close>
                                <Button type='submit' color='blue' variant='soft' onClick={handleSave}>Salvar</Button>
                            </Flex>
                            
                            
                        </Flex>
                    </form>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
}