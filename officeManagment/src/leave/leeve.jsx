import { useState } from "react";

const LeaveForm = () => {

  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const submitLeave = (e) => {
    e.preventDefault();

    if (new Date(endDate) < new Date(startDate)) {
      alert("End date cannot be before start date");
      return;
    }

    const data = {
      leaveType,
      startDate,
      endDate,
      reason
    };

    console.log(data);
  };

  return (

    <div className="flex justify-center">
            <form
      onSubmit={submitLeave}
      className="bg-white py-6 sm:px-6 px-4 rounded-xl shadow sm:w-[400px] w-[350px] border-black border-3 rounded-md my-20"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Apply Leave</h2>

      <select
        className="w-full border p-2 mb-3"
        onChange={(e) => setLeaveType(e.target.value)}
      >
        <option>Leave Type</option>
        <option>Casual</option>
        <option>Sick</option>
        <option>Emergency</option>
      </select>

      <input
        type="date"
        className="w-full border p-2 mb-3"
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        className="w-full border p-2 mb-3"
        onChange={(e) => setEndDate(e.target.value)}
      />

      <textarea
        placeholder="Reason"
        className="w-full border p-2 mb-3"
        onChange={(e) => setReason(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit Leave
      </button>
    </form>
    </div>
   
  );
};

export default LeaveForm;