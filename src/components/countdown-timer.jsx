import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <div className='row m-0 p-0 '>
        <div className='w-auto d-flex flex-column align-items-center' ><p className='fs-6 m-0 '>Days</p> {days}</div>
        <div className='w-auto d-flex flex-column align-items-center'><p className='fs-6 m-0'>Hours</p> {formatTime(hours)}</div>
        <div className='w-auto d-flex flex-column align-items-center'><p className='fs-6 m-0'>Minutes</p> {formatTime(minutes)}</div>
        <div className='w-auto d-flex flex-column align-items-center'><p className='fs-6 m-0'>Seconds</p> {formatTime(seconds)}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
