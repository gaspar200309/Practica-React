import React, { useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import { IoCalendarOutline } from 'react-icons/io5';
import EventList from '../componentes/EventList';
import EventForm from '../componentes/EventForm';
import {FaBriefcase } from 'react-icons/fa';
import { FaKitchenSet } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import 'dayjs/locale/es';
import './CalendarEdit.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';


dayjs.locale("es");

function CalendarEdit() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [events, setEvents] = useState([
    {
      start: dayjs('2023-12-18T12:00:00').toDate(),
      end: dayjs('2023-12-18T13:00:00').toDate(),
      eventType: 'Presencial',
      personCount: 5,
    },
    {
      start: dayjs('2023-12-18T14:00:00').toDate(),
      end: dayjs('2023-12-18T15:00:00').toDate(),
      eventType: 'Pickup',
      personCount: 8,
    },
  ]);

  const localizer = dayjsLocalizer(dayjs);

  const dayStyleGetter = (date) => {
    const hasEvent = events.some(
      (event) =>
        dayjs(event.start).isSame(date, 'day') || dayjs(event.end).isSame(date, 'day')
    );
  
    return hasEvent ? { style: { backgroundColor: '#4d3a6b', borderRadius: '10px' } } : {};
  };
  

  const calendarStyle = {
    height: 500,
    backgroundColor: '#fff',
  };

  const handleAddEvent = (date) => {
    setSelectedDate(date);
    setShowEventForm(true);
  };

  const handleSaveEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowEventForm(false);
  };

  const handleCancelEvent = () => {
    setShowEventForm(false);
  };

  return (
    <>
        <div className='calendar'>
        <div className='calendarList'>
        <Calendar
          localizer={localizer}
          events={events}
          views={['month']}
          toolbar={true}
          style={calendarStyle}
          components={{
            day: {
              event: ({ event }) => (
                <button
                  onClick={() => handleAddEvent(dayjs(event.start))}
                  style={{ backgroundColor: 'orange' }}
                >
                  {event.eventType === 'Presencial' ? <FaKitchenSet /> : <IoMdBriefcase />}
                  {event.personCount}
                </button>
              ),
            },
          }}
          dayPropGetter={dayStyleGetter}
          selectable={true}
          onSelectSlot={(slotInfo) => handleAddEvent(dayjs(slotInfo.start))}
        />

        {selectedDate && (
          <EventList date={selectedDate} events={events} onAddEvent={handleAddEvent} />
        )}

        </div>
      {showEventForm && (
        <EventForm date={selectedDate} onSave={handleSaveEvent} onCancel={handleCancelEvent} />
      )}
    </div>
    </>
  );
}

export default CalendarEdit;
