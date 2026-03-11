import React from "react";
import { useRef} from 'react';

const AttendanceHistory = () => {

  const attendanceData = [
    {
      date: "11 Mar 2026",
      time: "09:10 AM",
      status: "Present"
    },
    {
      date: "10 Mar 2026",
      time: "09:25 AM",
      status: "Present"
    },
    {
      date: "09 Mar 2026",
      time: "-",
      status: "Leave"
    },
    {
      date: "08 Mar 2026",
      time: "09:40 AM",
      status: "Late"
    },
    {
      date: "07 Mar 2026",
      time: "-",
      status: "Absent"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Present":
        return "text-green-600 bg-green-100";
      case "Absent":
        return "text-red-600 bg-red-100";
      case "Leave":
        return "text-yellow-600 bg-yellow-100";
      case "Event":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const myRef = useRef();

  const showCard = () => {
    myRef.current.style.display = "block";
  }

  const hideCard = () => {
    myRef.current.style.display = "none";
  }

  return (

    <div className="relative flex flex-col gap-6 px-10 py-8">
      <div className="self-end mr-80">
        <button className="text-md px-3 py-1 bg-green-500 text-yellow-500 font-bold rounded-md cursor-pointer hover:bg-white hover:border-green-500 hover:border-3 hover:text-green-500 " onClick={showCard}>Attandance</button>
      </div>
      <div className="w-full max-w-[700px] mx-auto bg-white shadow-xl rounded-2xl p-6 border">


        <h2 className="text-xl font-bold mb-4 text-center">
          📊 Attendance History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left">📅 Date</th>
                <th className="p-3 text-left">⏰ Time</th>
                <th className="p-3 text-left">📌 Status</th>
              </tr>
            </thead>

            <tbody>

              {attendanceData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">

                  <td className="p-3">{item.date}</td>

                  <td className="p-3">{item.time}</td>

                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="absolute top-30 sm:left-130 left-5 w-[350px] bg-white shadow-xl rounded-2xl p-2 border hidden" ref={myRef}>

          <div className='w-full relative'>

            <h2 className="text-xl font-bold text-center mb-4">
              📅 Attendance
            </h2>

            <div className="space-y-2 text-gray-700">
              <p><b>👤 Employee:</b> Azix Ullah</p>
              <p><b>📆 Date:</b> 11 March 2026</p>
              <p><b>⏰ Time:</b> 09:15 AM</p>
            </div>

            <div className="absolute top-0 right-3 rounded-full text-sm flex items-center gap-1">
              <i className="fa-solid fa-circle-xmark text-2xl cursor-pointer" onClick={hideCard}></i>

            </div>

            <div className="mt-4 text-center">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                🟢 Present
              </span>
            </div>

            <div className="flex justify-between mt-6">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                ✔ Mark Present
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                ❌ Mark Absent
              </button>
            </div>

          </div>


        </div>
    </div>

  );
};

export default AttendanceHistory;