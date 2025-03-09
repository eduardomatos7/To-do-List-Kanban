import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditTask from '../components/EditTask';
import App from '../App';
import {ListTask} from '../pages/listTask/ListTask';
import {TaskProvider} from '../contexts/TaskContext';

export const AppRouts = () => {
    return (
        <Router>
                <TaskProvider>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/editTask/:id' element={<EditTask />} />
                        <Route path='/listTask/:id' element={<ListTask />} />
                    </Routes>
                </TaskProvider>
        </Router>
    )
}