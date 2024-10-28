import React, { useEffect, useState } from "react";
import "./EventListingPage.css";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

const EventListingPage = ({ filteredEvents, isDarkTheme }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  return (
    <div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={handleEventClick} />
        ))}
      </div>
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={handleCloseModal}
          isDarkTheme={isDarkTheme}
        />
      )}
    </div>
  );
};

export default EventListingPage;
