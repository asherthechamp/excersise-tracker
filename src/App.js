import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ExercisesList from "./components/ExercisesList";
import CreateUser from "./components/CreateUser";
import CreateExercise from "./components/CreateExercise";
import Navbar from "./components/Navbar";
// import { Switch } from "react-router";

function App() {
  return (
    <>
      <div className="container">
        <Router basename="/excersise-tracker">
          <Navbar />
          <br />
          <Routes>
            <Route path="/" exact element={<ExercisesList />} />
            <Route path="/user" element={<CreateUser />} />
            <Route path="/create" element={<CreateExercise />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
