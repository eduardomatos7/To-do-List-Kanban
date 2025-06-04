
export const getData = async () => {
    const response = await fetch('http://localhost:3001/tasks')
    const data = await response.json()
    console.log(data)
    return data
}
export const postData = async (task) => {
    await fetch('http://localhost:3001/tasks', {
    await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })

}

export const deleteData = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE'
    });
}

export const putData = async (task) => {
    const taskUpdate = await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    
    return taskUpdate.json()
}


