import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import EventListingPage from "./pages/EventListingPage";
import eventsData from "./data/mockData";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = eventsData.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.classList.toggle("dark-theme"); 
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark' : ''}`}>
      <Navbar onSearch={handleSearch} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Carousel />
      <EventListingPage filteredEvents={filteredEvents} isDarkTheme={isDarkTheme} />
      <Footer />
    </div>
  );
}

export default App;
