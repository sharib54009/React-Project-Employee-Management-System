import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContent from './Context/AuthContext.jsx'
import TaskContext from './Context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContent>
     <TaskContext>
       <App />
     </TaskContext>
   </AuthContent>
  </StrictMode>,
)
