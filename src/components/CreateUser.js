import React, { useState, useEffect, useLocation } from "react";
import db_url from "../address";

function CreateUser() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [tableData, setTableData] = useState([]);

  async function handleClick() {
    const result = await fetch(`${db_url}/users/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    await fetchUsers();
    return result.json();
  }

  async function fetchUsers() {
    const usersres = await fetch(`${db_url}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application",
        Accept: "application/json",
      },
    });
    usersres.json().then((data) => {
      setUsers(data);
      setTableData(
        data.map((user) => (
          <tr>
            <td>{user.username}</td>
          </tr>
        ))
      );
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="mb-3"> Create User </h1>
      <div className="mb-3">
        <input
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          placeholder="User Name"
          className="form-control"
          type="text"
        />
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Add User
      </button>
      <table className="mt-5 table">
        <thead>
          <tr>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
}

export default CreateUser;
