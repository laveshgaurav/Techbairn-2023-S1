import React from "react";

function Hello({ userName, userId, generateAlert }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      Hello {userName},<p>User Id - {userId}</p>,
      <button onClick={generateAlert}>Alert</button>
    </div>
  );
}

export default Hello;
