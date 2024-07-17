import React, { useEffect, useState } from "react";
import axios from "axios";

function ConnectionTest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/",
    })
      .then((response) => setMessage(response.data))
      .catch((error) =>
        console.error("Error connecting to backend server", error)
      );
  }, []);

  if (message === "") {
    return <p>Connection error</p>;
  } else {
    return <p>{message}</p>;
  }
}

export default ConnectionTest;
