import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import './Header.css'; 


export function Header() {
  return (
    <div className="header">
      <h1 className="logo">Logo</h1>
      <div className="container-descripcion">
      <div className="descripcion">
        <p>Bienvenido</p>
        <h3>Seratta Gourmand Maker</h3>
        <p>Cerrar sesión</p>
      </div>
      <img src='./ruta_de_la_imagen.jpg' alt='Logo2' />
      </div>
      <div className='navbar'>
        <ul>
          <li>Dashboard</li>
          <li>Perfil restaurante</li>
          <li>Experiencias</li>
          <li>Facturación</li>
          <li>Políticas de Cancelación</li>
        </ul>
          <button className="notificaciones">Notificaciones<IoIosNotificationsOutline className="not" /></button>
        
      </div>
    </div>
  );
}
