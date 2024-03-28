import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineRoomService } from 'react-icons/md';
import { MdPeople } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { LuChefHat } from "react-icons/lu";
import './EventList.css'
import dayjs from 'dayjs';

const EventList = ({ date, events, onAddEvent, isAM }) => {
  const filteredEvents = events.filter(
    (event) =>
      dayjs(date).isSame(dayjs(event.start), 'day') || dayjs(date).isSame(dayjs(event.end), 'day')
  );

  const totalCupos = 50;
  const cuposPresencial = 9; 
  const cuposPickup = 36; 

  const cuposReservadosPresencial = filteredEvents.filter((event) => event.tipo === 'Presencial').length;
  const cuposReservadosPickup = filteredEvents.filter((event) => event.tipo === 'Pickup').length;

  const disponiblesPresencial = cuposPresencial - cuposReservadosPresencial;
  const disponiblesPickup = cuposPickup - cuposReservadosPickup;
  const disponiblesTotales = totalCupos - filteredEvents.length;

  return (
    <div className='listaEvento'>
      <div className="title">
                <h2>
                    Nuevo Evento
                    <IoCalendarOutline className="Icon1" />
                    {date.format("DD MMM")}
                </h2>
            </div>
      <div className='cena-chefList'>
        <h3>
        <LuChefHat className="lu" /> Cena Chef
        </h3>
        <p>
          Total cupos: {totalCupos} ({cuposPresencial} presencial / {cuposPickup} pickup)
          <br />
          Cupos reservados: {filteredEvents.length} ({cuposReservadosPresencial} presencial /{' '}
          {cuposReservadosPickup} pickup)
          <br />
          Disponibles: {disponiblesTotales} ({disponiblesPresencial} presencial / {disponiblesPickup} pickup)
        </p>
      </div>

      {filteredEvents.map((event, index) => (
        <div key={index} className="event-list-item">
          <div>
            {event.eventType === 'Presencial' && <FaKitchenSet />}
            {event.eventType === 'Pickup' && <IoMdBriefcase />}
          </div>
          <ul className='lista1'>
            <label>{dayjs(event.start).format(`hh:mma`)}</label>
            <label>
              {event.selectedPersonCount}/{event.personCount} <MdPeople />
            </label>
            <button><FaEdit /></button>
            <button>Detalle</button>
          </ul>
        </div>
      ))}

      <button className='agregarEvento' onClick={() => onAddEvent(date)}>+Agregar Evento</button>
    </div>
  );
};

export default EventList;
