import React from "react";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <img src={require("./images/logo.png")} alt="logo" className="logo" />
      <UserForm />
    </div>
  );
}

export default App;
