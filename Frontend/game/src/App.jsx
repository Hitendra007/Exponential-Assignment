import React, { useState, useEffect } from "react";
import ClickButton from "./Components/ClickButton";
import axios from "axios";

const API_URL = "http://localhost:5000";
const USER_ID = "test-user-123"; 

function App() {
  const [counter, setCounter] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/user/${USER_ID}`).then((response) => {
      setCounter(response.data.counter);
      setPrizes(response.data.prizes);
    });
  }, []);

  const handleClick = async () => {
    const { data } = await axios.post(`${API_URL}/click`, { userId: USER_ID });
    setCounter(data.counter);
    setPrizes(data.prizes);
    setMessage(data.message);
  };

  return (
    <div className="container">
      <h1>Cookie Clicker</h1>
      <h2>Score: {counter}</h2>
      <h3>Prizes: {prizes}</h3>
      {message && <p>{message}</p>}
      <ClickButton handleClick={handleClick} />
    </div>
  );
}

export default App;
