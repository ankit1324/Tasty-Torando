import { useState } from "react";

const Info = ({ name, location }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="infoCard">
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
      <h1>Name - {name}</h1>
      <h2>Location - {location}</h2>
      <h2>contact - @ankit1324</h2>
    </div>
  );
};

export default Info;
