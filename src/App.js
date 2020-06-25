import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome msg="Welcome" />
        <Greet name="Dipesh" heroName="Shaktiman">
          <p>This the paragraph tag</p>
        </Greet>
      </header>
    </div>
  );
}

export default App;
