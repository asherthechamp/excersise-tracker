import React, { useState, useEffect } from "react";
import CreateExercise from "./CreateExercise";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import db_url from "../address";

function ExercisesList() {
  const [exercises, setExercises] = useState([]);
  const [exercisesData, setExercisesData] = useState([]);

  useEffect(
    async function fetchData() {
      const result = await fetch(`${db_url}/exercises`);
      result.json().then((data) => {
        setExercises(data);
        console.log(exercises);
        setExercisesData(
          data.map((exercise) => (
            <tr>
              <td>{exercise.username}</td>
              <td>{exercise.description}</td>
              <td>{exercise.duration}</td>
              <td>{new Date(exercise.date).toDateString()}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to="excercises-tracker/create"
                  state={{ eid: exercise._id }}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(exercise._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        );
      });
    },
    [exercises]
  );

  function handleDelete(id) {
    fetch(`${db_url}/exercises/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
      },
    });
  }

  return (
    <div>
      <h1 className="mb-3">Exercises List</h1>
      <table className="mt-5 table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{exercisesData}</tbody>
      </table>
    </div>
  );
}

export default ExercisesList;
