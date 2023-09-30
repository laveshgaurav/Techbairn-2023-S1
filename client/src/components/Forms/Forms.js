import React, { useState } from "react";

function Forms() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });

  const handleUserInput = (e) => {
    setUserInput({
      ...userInput,
      // [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        placeholder="Enter First Name"
        value={userInput?.firstName}
        name="firstName"
        onChange={handleUserInput}
      />
      <input
        placeholder="Enter Last Name"
        name="lastName"
        value={userInput?.lastName}
        onChange={handleUserInput}
      />
      <input
        type="date"
        name="dob"
        value={userInput?.dob}
        onChange={handleUserInput}
      />
      <button
        onClick={() => {
          console.log(userInput);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Forms;
