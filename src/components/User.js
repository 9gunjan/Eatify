import React, { useState } from "react";

const User = () => {
  const[count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>User name</h1>
      <h2>Location</h2>
      <h2>Contact us</h2>
    </div>
  );
};

export default User;
