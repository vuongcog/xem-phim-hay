import React from "react";
import App2 from "./App2";
import App from "./App";

const App1 = () => {
  const messages = [
    { message: { message: 1 } },
    { message: { message: 2 } },
    { message: { message: 3 } },
    { message: { message: 4 } },
    5,
    // {},
  ];
  return (
    <div style={{ color: "white" }}>
      {messages.map((item, index) => {
        debugger;
        console.log("hello");
        return <App2 key={index} message={item}></App2>;
      })}
    </div>
  );
};
export default App1;
