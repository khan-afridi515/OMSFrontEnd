import React from "react";

const EventCard = ({ event }) => {

  const register = () => {
    alert(`Registered for ${event.title}`);
  };

  return (
    <div className="w-full h-full bg-blue-600 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition duration-300">

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {event.title}
        </h2>

        <div className="flex items-center gap-2 mb-2">
          <i className="fa-solid fa-calendar"></i>
          <p>{event.date}</p>
        </div>

        <div className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot"></i>
          <p>{event.location}</p>
        </div>
      </div>

      <button
        onClick={register}
        className="mt-6 bg-purple-500 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition cursor-pointer"
      >
        Register Event
      </button>

    </div>
  );
};

export default EventCard;