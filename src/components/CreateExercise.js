import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import { Link } from "react-router-dom";

function CreateExercise() {
  const [exercise, setExercise] = useState({});
  const [users, setUsers] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [optionData, setOptionData] = useState();
  const location = useLocation();

  const eid = location.state?.eid;

  useEffect(async () => {
    await fetchUsersAndExercise();
  }, []);

  async function clickHandler(props) {
    console.log(exercise);
    if (eid) {
      const result = await fetch(
        `http://localhost:5000/exercises/update/${eid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(exercise),
        }
      );
    } else {
      const result = await fetch("http://localhost:5000/exercises/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(exercise),
      });
      return result.json();
    }
    // await fetchUsersAndExercise();
  }

  async function fetchUsersAndExercise() {
    const result2 = await fetch(`http://localhost:5000/exercises/${eid}`);
    result2.json().then((data) => {
      setExercise(data);
    });
    const result3 = await fetch("http://localhost:5000/exercises");
    result3.json().then((data) => setExercises(exercises));
    const result = await (await fetch("http://localhost:5000/users"))
      .json()
      .then((data) => {
        // setUsers(data);

        setOptionData(
          data.map((user) => (
            <option value={user.username}>{user.username}</option>
          ))
        );
      });
  }

  return (
    <div>
      <h1 className="mb-4">Exercise</h1>
      <div className="mb-3">
        <select
          className="form-select"
          onChange={(e) => {
            setExercise({ ...exercise, username: e.target.value });
          }}
          value={exercise.username}
          placeholder="User Name"
        >
          <option className="text-muted" hidden>
            Select User
          </option>
          {optionData || []}
        </select>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          onChange={(e) => {
            setExercise({ ...exercise, description: e.target.value });
          }}
          value={exercise.description}
          placeholder="Descreption"
          type="text"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          onChange={(e) => {
            setExercise({ ...exercise, duration: e.target.value });
          }}
          value={exercise.duration}
          placeholder="Duration"
          type="number"
        />
      </div>
      <div className="mb-3">
        <DateTimePicker
          className="form-control"
          onChange={(v) => {
            setExercise({ ...exercise, date: v });
          }}
          value={exercise.date || null}
          disableClock={true}
        />
      </div>

      <Link to="/" className="btn btn-primary" onClick={() => clickHandler()}>
        Save
      </Link>
    </div>
  );
}

export default CreateExercise;
