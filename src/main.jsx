import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css"; 
import {Theme} from '@radix-ui/themes'
import { AppRouts } from './routes';
import { TaskProvider } from './contexts/TaskContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme appearance='dark'>
      <TaskProvider>
        <AppRouts />
      </TaskProvider>
    </Theme>
  </StrictMode>,
)
