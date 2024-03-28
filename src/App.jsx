import React from 'react'
// import CalendarEdit from './calendar/CalendarEdit'
// import Header from './calendar/Header'
// import Experiencia from './calendar/Experiencia'
import CalendarEdit from './calendar/CalendarEdit.jsx'
import { Header } from './header/Header.jsx';
import { Experiencia } from './experiencia/Experiencia.jsx';

export function App() {
  return (
    <div>
      <Header></Header>
      <Experiencia></Experiencia>
      <CalendarEdit/>
    </div>
  )

}

