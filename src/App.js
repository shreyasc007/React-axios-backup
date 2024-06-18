import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  //how to send one get request
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("get").innerHTML = response.data;
  };

  //how to send one post request
  const data = "Hello from React";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("get").innerHTML = response.data;
  };

  //how to send one post request related to form(data)
  const [formData, setformData] = useState("");
  const postFormDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("get").innerHTML = response.data;
  };

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="get"></p>

      <br />
      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="get"></p>

      <br />
      <form onSubmit={postFormDataFromFrontend}>
        <input
          type="text"
          name="formdata"
          value={formData}
          onChange={(e) => setformData(e.target.value)}
        ></input>
        <input type="submit" value="Submit Form"></input>
      </form>
      <p id="get"></p>
    </div>
  );
};

export default App;
