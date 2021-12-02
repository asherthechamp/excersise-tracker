import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExercisesList from "./components/ExercisesList";
import CreateUser from "./components/CreateUser";
import CreateExercise from "./components/CreateExercise";
import Navbar from "./components/Navbar";
// import { Switch } from "react-router";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <br />
          <Routes>
            <Route
              path="excersise-tracker/"
              exact
              element={<ExercisesList />}
            />
            <Route path="excersise-tracker/user" element={<CreateUser />} />
            <Route
              path="excersise-tracker/create"
              element={<CreateExercise />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
