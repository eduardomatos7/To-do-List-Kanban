import React, { useContext, useState } from 'react'
import { Box, Button, Dialog, Flex, Text, TextArea, TextField, RadioGroup, Badge } from '@radix-ui/themes';
import Task from '../entities/Task';
import TaskContext from '../contexts/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';

function TaskFormEdit({ title, setTitle, description, setDescription, status, setStatus, taskPriority, setTaskPriority }) {
  const [tempTitle, setTempTitle] = useState(title);
  const [tempDescription, setTempDescription] = useState(description);
  const [tempStatus, setTempStatus] = useState(status);
  const [tempTaskPriority, setTempTaskPriority] = useState(taskPriority);
  const { updateTask } = useContext(TaskContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(tempTitle);
    setDescription(tempDescription);
    setStatus(tempStatus);
    setTaskPriority(tempTaskPriority);
    handleUpdate()
    
  };

   const handleUpdate = () => {
        const taskUpdated = new Task( id, tempTitle, tempDescription, tempStatus, tempTaskPriority);
        updateTask(id, taskUpdated);
        navigate('/');
      };
  
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface" color="gray" size='2' style={{ width: "10rem"}}>Editar informações</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth='28rem'>
        <Flex gap='4' direction='column' width='100%'>
          <Dialog.Title>Editar tarefa</Dialog.Title>
          <Dialog.Description>
            Preencha os detalhes abaixo para editar a tarefa.
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
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
                  value={tempTitle}
                  required
                  onInput={(e) => setTempTitle(e.currentTarget.value)}
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
                  value={tempDescription}
                  onInput={(e) => setTempDescription(e.currentTarget.value)}
                />
              </Box>
              <Flex>
                <Flex direction="column" mr='3rem'>
                  <Text>Situação:</Text>
                  <RadioGroup.Root name='status' value={tempStatus} onValueChange={(value) => setTempStatus(value)} required>
                    <RadioGroup.Item value='todo' ><Badge color='gray'>Pendente</Badge></RadioGroup.Item>
                    <RadioGroup.Item value='doing'><Badge color='yellow'>Realizando</Badge></RadioGroup.Item>
                    <RadioGroup.Item value='done'><Badge color='green'>Concluída</Badge></RadioGroup.Item>
                  </RadioGroup.Root>
                </Flex>
                <Flex direction="column">
                  <Text>Prioridade:</Text>
                  <RadioGroup.Root name='priority' value={tempTaskPriority} onValueChange={(value) => setTempTaskPriority(value)}>
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
                {(tempTitle === "" || !tempStatus) 
                ? 
                <Button type='submit' color='blue' variant='soft'>Salvar</Button> 
                :
                <Dialog.Close>
                <Button type='submit' color='blue' variant='soft'>Salvar</Button>
            </Dialog.Close> }
                
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default TaskFormEdit