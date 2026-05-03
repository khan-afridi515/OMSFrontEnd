// import { useEffect, useState } from "react";
// import EventCard from "./events";
// import { userlocalHost } from "../localHost";
// import axios from "axios";



// const EventsPage = () => {


// const eventUrl = `${userlocalHost}/api/v2/eventRoute/getEvents`;
// console.log("eventUrl", eventUrl);
// const [events, setEvents] = useState();

//   useEffect(()=>{
//   axios.get(eventUrl)
//   .then((res)=>{
//     console.log("This is res", res)
//     console.log("events array", res.data.wholeEvents);
//     setEvents(res.data.wholeEvents);
//   })
// },[])

// console.log("myevents", events);

//   // const events = [
//   //   {
//   //     title: "Office Meetup",
//   //     date: "20 March 2026",
//   //     location: "Conference Hall"
//   //   },
//   //   {
//   //     title: "Tech Seminar",
//   //     date: "25 March 2026",
//   //     location: "Auditorium"
//   //   },
//   //   {
//   //     title: "Team Building Event",
//   //     date: "30 March 2026",
//   //     location: "Outdoor Garden"
//   //   }
//   // ];

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">

//       <h1 className="text-3xl font-bold text-center mb-10">
//         Upcoming Events
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
//         {events.map((event, i) => (
//           <EventCard key={i} event={event} />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default EventsPage;


import { useEffect, useState } from "react";
import EventCard from "./events";
import { userlocalHost } from "../localHost";
import axios from "axios";

const EventsPage = () => {

  const eventUrl = `${userlocalHost}/api/v2/eventRoute/getEvents`;

  const [events, setEvents] = useState([]);   // ✅ default empty array
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    axios.get(eventUrl)
      .then((res) => {
        setEvents(res.data.wholeEvents || []);
      })
      .catch((err) => {
        console.error(err);
        setEvents([]); // fallback
      })
      .finally(() => {
        setLoading(false); // ✅ stop loading
      });
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-10">
        Upcoming Events
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ✅ Loading */}
        {loading && <p>Loading...</p>}

        {/* ✅ No events */}
        {!loading && events.length === 0 && (
          <p>No events found</p>
        )}

        {/* ✅ Show events */}
        {!loading && events.length > 0 &&
          events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))
        }

      </div>
    </div>
  );
};

export default EventsPage;