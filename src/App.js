import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Greet from "./Components/Greet";
// import Welcome from "./Components/Welcome";
// import Message from "./Components/Message";
// import Counter from "./Components/Counter";
// import FunctionClick from "./Components/FunctionClick";
// import ClassClick from "./Components/ClassClick";
// import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome msg="Welcome" />
        <Greet name="Dipesh" heroName="Shaktiman">
          <p>This the paragraph tag</p>
        </Greet> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind /> */}
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
