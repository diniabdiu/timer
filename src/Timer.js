import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);

  const ticker = () => {
    setTimer(new Date() - props.start);
  };
  useEffect(() => {
    setInterval(ticker, 1000);
    return () => {
      clearInterval();
    };
  }, []);
  console.log("test");
  return (
    <div>
      <p>You have been on this site since: </p>
      <span> {Math.round(timer / 1000)} </span>
      <p>Seconds.</p>
    </div>
  );
};

export default Timer;
