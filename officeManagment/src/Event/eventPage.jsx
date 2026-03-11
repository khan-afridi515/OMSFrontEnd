import EventCard from "./events";


// const EventsPage = () => {

//   const events = [
//     {
//       title: "Office Meetup",
//       date: "20 March",
//       location: "Conference Hall"
//     },
//     {
//       title: "Tech Seminar",
//       date: "25 March",
//       location: "Auditorium"
//     }
//   ];

//   return (
//     <div className="p-10 grid grid-cols-3 gap-6">

//       {events.map((event, i) => (
//         <EventCard key={i} event={event} />
//       ))}

//     </div>
//   );
// };

// export default EventsPage;




// import EventCard from "./events";

// import EventCard from "./events";

const EventsPage = () => {

  const events = [
    {
      title: "Office Meetup",
      date: "20 March 2026",
      location: "Conference Hall"
    },
    {
      title: "Tech Seminar",
      date: "25 March 2026",
      location: "Auditorium"
    },
    {
      title: "Team Building Event",
      date: "30 March 2026",
      location: "Outdoor Garden"
    }
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-10">
        Upcoming Events
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>

    </div>
  );
};

export default EventsPage;