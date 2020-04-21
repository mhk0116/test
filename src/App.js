import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Data from "./routes/Data";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/data" component={Data} />
    </BrowserRouter>
  );
}

export default App;
