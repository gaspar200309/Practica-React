import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { LuChefHat } from "react-icons/lu";
import "./EventForm.css";
import dayjs from "dayjs";

const EventForm = ({ date, onSave, onCancel, onAMPMChange }) => {
    const [title, setTitle] = useState("Nuevo evento");
    const [eventType, setEventType] = useState("Presencial");
    const [personCount, setPersonCount] = useState(1);
    const [selectedHour, setSelectedHour] = useState(12);
    const [selectedMinute, setSelectedMinute] = useState(0);
    const [isAM, setIsAM] = useState(true);

    const formatNumber = (number) => (number < 10 ? `0${number}` : number);

    const handleSave = () => {
        const selectedTime = `${formatNumber(selectedHour)}:${formatNumber(
            selectedMinute
        )} ${isAM ? "AM" : "PM"}`;
        const newEvent = {
            title,
            start: date.hour(selectedHour).minute(selectedMinute).toDate(),
            end: date
                .hour(selectedHour)
                .minute(selectedMinute)
                .add(1, "hour")
                .toDate(),
            eventType,
            personCount,
            selectedTime,
            selectedPersonCount: personCount,
        };

        onSave(newEvent);
    };


    return (
        <div className="event-form">
            <div className="title">
                <h2>
                    Nuevo Evento
                    <IoCalendarOutline className="Icon1" />
                    {date.format("DD MMM")}
                </h2>
            </div>

            <div className="cena-chef">
                <div className="cena-chefInterior">
                    <h5 className="cena-chefTitulo">
                        {" "}
                        <LuChefHat className="lu" />
                        Cena Chef
                    </h5>

                    <div className="event-type-buttons">
                        <button
                            className={eventType === "Presencial" ? "selected" : ""}
                            onClick={() => setEventType("Presencial")}>
                            <FaKitchenSet /> Presencial
                        </button>
                        <button
                            className={eventType === "Pickup" ? "selected" : ""}
                            onClick={() => setEventType("Pickup")}>
                            <IoMdBriefcase /> Pickup
                        </button>
                    </div>
                </div>
                <div className="personas">
                    <h3>N° de Personas</h3>
                    <button
                        className="btn1"
                        onClick={() =>
                            setPersonCount((prevCount) => Math.max(prevCount - 1, 1))
                        }>
                        -
                    </button>
                    <p>{personCount}</p>
                    <button
                        className="btn2"
                        onClick={() => setPersonCount((prevCount) => prevCount + 1)}>
                        +
                    </button>
                </div>
            </div>

            <div className="container-time">
                <div className="time">
                    <div className="hour">
                        <input
                            type="number"
                            value={formatNumber(selectedHour)}
                            onChange={(e) => {
                                const newHour = parseInt(e.target.value, 10) || 0;
                                setSelectedHour(newHour > 12 ? 12 : newHour);
                            }}
                            min="0"
                            max="12"
                        />
                        <label>Hora</label>
                    </div>
                    <div className="minute">
                        <input
                            type="number"
                            value={formatNumber(selectedMinute)}
                            onChange={(e) => {
                                const newMinute = parseInt(e.target.value, 10) || 0;
                                setSelectedMinute(newMinute >= 60 ? 59 : newMinute);
                            }}
                            min="0"
                            max="59"
                        />
                        <label>Minutos</label>
                    </div>
                </div>
                <div className="am-pm-buttons">
                    <button
                        className={isAM ? "selected" : ""}
                        onClick={() => {
                            setIsAM(true);
                            onAMPMChange(true);
                        }}
                    >
                        AM
                    </button>
                    <button
                        className={!isAM ? "selected" : ""}
                        onClick={() => {
                            setIsAM(false);
                            onAMPMChange(true);
                        }}
                    >
                        PM
                    </button>
                </div>
            </div>
            <div className="btn-guardar">
                <button
                    className="btn4"
                    onClick={onCancel}>
                    Descartar Cambios
                </button>
                <button
                    className="btn3"
                    onClick={handleSave}>
                    Guardar
                </button>
            </div>
        </div>
    );
};

export default EventForm;
