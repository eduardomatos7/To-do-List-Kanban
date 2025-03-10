import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import {ListTask} from '../pages/listTask/ListTask';
import {TaskProvider} from '../contexts/TaskContext';
import TaskFormEdit from '../components/TaskFormEdit';

export const AppRouts = () => {
    return (
        <Router>
                <TaskProvider>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/taskFormEdit/:id' element={<TaskFormEdit />} />
                        <Route path='/listTask/:id' element={<ListTask />} />
                    </Routes>
                </TaskProvider>
        </Router>
    )
}