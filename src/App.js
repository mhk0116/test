import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Data from "./routes/Data";
import PM from "./routes/PM";
import Navigation from "./components/Navigation"
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/data" component={Data} />
      <Route path="/accident/personalmobility" component={PM} />
    </BrowserRouter>
  );
}

export default App;
