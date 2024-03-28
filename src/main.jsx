import React from 'react'
import ReactDOM from 'react-dom/client'
import CalendarEdit from './calendar/CalendarEdit.jsx'
import { Header } from './header/Header.jsx';
import { Experiencia } from './experiencia/Experiencia.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header></Header>
  <Experiencia></Experiencia>
    <CalendarEdit/>
  </React.StrictMode>,
)
