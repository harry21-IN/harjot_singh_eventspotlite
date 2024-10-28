import React from "react";
import "./EventCard.css";

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
};

const EventCard = ({ event, onClick }) => (
  <div
    className="event-card"
    style={{ backgroundImage: `url(${event.image})` }}
    onClick={() => onClick(event)}
  >
    <div className="event-card-details">
      <h3>{event.name}</h3>
      <p>{formatDate(event.date)} | {event.location}</p>
    </div>
  </div>
);

export default EventCard;
