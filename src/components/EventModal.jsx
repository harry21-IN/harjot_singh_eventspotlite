import React, { useEffect, useState } from "react";
import "./EventModal.css";

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
};

const EventModal = ({ event, onClose, isDarkTheme }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    return () => setShowModal(false);
  }, [event]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`modal-backdrop ${showModal ? "show" : ""}`} onClick={handleClose}>
      <div className={`modal-content ${showModal ? "show" : ""} ${isDarkTheme ? "dark" : ""}`} onClick={(e) => e.stopPropagation()}>
        <button className={`close-button ${isDarkTheme ? "dark" : ""}`} aria-label="Close" onClick={handleClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2>{event.name}</h2>
        <p>{formatDate(event.date)} | {event.location}</p>
        <p className="description">{event.description}</p>
        {event.image && <img src={event.image} alt={event.name} />}
      </div>
    </div>
  );
};

export default EventModal;
