import axios from "axios";
import React from "react";
import { userlocalHost } from "../localHost";


const EventCard = ({ event }) => {


  const register = async (id) => {
    const userToken = JSON.parse(localStorage.getItem("tokenData"));
    console.log(userToken)
    const registeUrl = `${userlocalHost}/api/v2/eventRoute/registerEvnt/${id}`;
    console.log("tokenData", userToken);
    axios.post(registeUrl, {}, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
      .then((res) => {
        console.log("get res", res);
        res && alert(res.data.msg)
      })
      .catch((err) => {
        console.log("Full error:", err);

        // 🔥 THIS is what you need
        if (err.response && err.response.data) {
          alert(err.response.data.msg); // "Already registered for this event"
        } else {
          alert("Something went wrong");
        }
      });

  };

  return (
    <div className="w-full h-full bg-blue-600 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition duration-300">

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {event.title}
        </h2>

        <div className="flex items-center gap-2 mb-2">
          <i className="fa-solid fa-calendar"></i>
          <p>{event.eventDate}</p>
        </div>

        <div className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot"></i>
          <p>{event.place}</p>
        </div>
      </div>

      <button
        onClick={() => register(event._id)}
        className="mt-6 bg-purple-500 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition cursor-pointer"
      >
        Register Event
      </button>

    </div>
  );
};

export default EventCard;