import React, { useRef, useState, useEffect } from "react";

const EmployeeAttendanceCard = () => {

  const myRef = useRef(null);
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hideCard = () => {
    myRef.current.classList.add("hidden");
  };

  const markAttendance = (type) => {
    setStatus(type);

    const attendanceData = {
      employee: "Azix Ullah",
      date: time.toLocaleDateString(),
      time: time.toLocaleTimeString(),
      status: type
    };

    console.log("Attendance Submitted:", attendanceData);
  };

  return (
    <div
      className="absolute top-50 sm:left-130 left-5 w-[350px] bg-white shadow-xl rounded-2xl p-2 border"
      ref={myRef}
    >

      <div className="w-full relative">

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-4">
          📅 Attendance
        </h2>

        {/* Employee Info */}
        <div className="space-y-2 text-gray-700">
          <p><b>👤 Employee:</b> Azix Ullah</p>
          <p><b>📆 Date:</b> {time.toLocaleDateString()}</p>
          <p><b>⏰ Time:</b> {time.toLocaleTimeString()}</p>
        </div>

        {/* Close Button */}
        <div className="absolute top-0 right-3 rounded-full text-sm flex items-center gap-1">
          <i
            className="fa-solid fa-circle-xmark text-2xl cursor-pointer text-gray-600 hover:text-red-500"
            onClick={hideCard}
          ></i>
        </div>

        {/* Status */}
        {status && (
          <div className="mt-4 text-center">
            <span className={`px-3 py-1 rounded-full text-sm
              ${status === "Present"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
              }`}>
              {status === "Present" ? "🟢 Present" : "🔴 Absent"}
            </span>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => markAttendance("Present")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            ✔ Mark Present
          </button>

          <button
            onClick={() => markAttendance("Absent")}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            ❌ Mark Absent
          </button>
        </div>

      </div>
    </div>
  );
};

export default EmployeeAttendanceCard;