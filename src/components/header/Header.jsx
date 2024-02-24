import React, { useState } from "react";
import TextField from "../textField";

export default function Header() {
  const [currentDate, setCurrentDate] = useState(getDate());

  function getDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const time = today.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return (
      <div>
        <p className="text-lg font-medium">
          {dayOfWeek}{" "}
          <span className="mx-3 text-base font-normal">
            {month} / {date} / {year}
          </span>
          <span className="text-base font-normal">{time}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="sm:flex items-center justify-between">
      <div>
        <p className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">
          Mahi Resto
        </p>
        <div className="mt-2">{currentDate}</div>
      </div>

      <div className="mt-5 sm:mt-0 w-full">
        <TextField />
      </div>
    </div>
  );
}
