import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import { userlocalHost } from "../localHost";
import axios from "axios";


const AttendanceHistory = () => {

  const [attendanceData, setAttandanceData] = useState([]);

  console.log("local token", localStorage.getItem("tokenData"));
  const userToken = JSON.parse(localStorage.getItem("tokenData"));

  const attandancelist = `${userlocalHost}/api/v1/attandance/userAttandance`;
  console.log("usertoken", userToken);

  const formatDateTime = (isoString) => { 
    const d = new Date(isoString);

    const formattedDate = d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

    const formattedTime = d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });

    return { formattedDate, formattedTime };
  };



  useEffect(() => {

    axios.get(attandancelist, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    })
      .then((res) => {
        console.log("res", res.data.attandance);
        setAttandanceData(res.data.attandance);
      })


  }, [userToken])


 console.log("attandanceDate", attendanceData);

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "text-green-600 bg-green-100";
      case "absent":
        return "text-red-600 bg-red-100";
      case "leave":
        return "text-yellow-600 bg-yellow-100";
      case "event":
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

  const attandanceUrl = `${userlocalHost}/api/v1/attandance/markAttandacne`;




  const markAttandance = () => {
    axios.post(attandanceUrl, {}, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    })
      .then((res) => {
        console.log("res", res);
        alert(res.data.msg);
      })
      .catch((err) => {
        alert(err.response?.data?.msg);
      })
  }

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const newformattedDate = time.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const newformattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (

    <div className="relative flex flex-col gap-6 sm:px-10 px-3 py-8">
      <div className="self-end sm:mr-80 mr-0">
        <button className="text-md px-3 py-1 bg-green-500 text-yellow-500 font-bold rounded-md cursor-pointer hover:bg-white hover:border-green-500 hover:border-3 hover:text-green-500 " onClick={showCard}>Attandance</button>
      </div>
      <div className="w-full max-w-[700px] mx-auto bg-white shadow-xl rounded-2xl sm:px-6 px-2 py-6 border">


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

              {attendanceData.map((item, index) => {
                const { formattedDate, formattedTime } = formatDateTime(item.date);
                return (
                  <tr key={index} className="border-b hover:bg-gray-50">

                    <td className="p-3">{formattedDate}</td>

                    <td className="p-3">{formattedTime}</td>

                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-sm capitalize ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>

                  </tr>
                )



              })}

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
            <p><b>👤 Employee:</b> Aziz Ullah</p>
            <p><b>📆 Date:</b> {newformattedDate}</p>
            <p><b>⏰ Time:</b> {newformattedTime}</p>
          </div>

          <div className="absolute top-0 right-3 rounded-full text-sm flex items-center gap-1">
            <i className="fa-solid fa-circle-xmark text-2xl cursor-pointer" onClick={hideCard}></i>

          </div>

          <div className="mt-4 text-center">
            
          </div>

          <div className="flex justify-between mt-6">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={markAttandance}>
              ✔ Mark Present
            </button>

          </div>

        </div>


      </div>
    </div>

  );
};

export default AttendanceHistory;