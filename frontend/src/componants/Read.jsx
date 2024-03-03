import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [usersList, setUsersList] = useState([]);
  const [usersListFlag, setUsersListFlag] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-users")
      .then((response) => {
        setUsersList(response.data.data);
        setUsersListFlag(true);
      })
      .catch((error) => {
        console.log(error.message);
        setUsersListFlag(false);
      });
  }, []);

  if (usersListFlag) {
    return (
      <div className="container my-2">
        <div>
          <h1>Users data</h1>
          <Link to={"/create"} className="btn btn-success">Add User</Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((userList, index) => (
              <tr key={userList._id}>
                <th scope="row">{index}</th>
                <td>{userList.name}</td>
                <td>{userList.email}</td>
                <td>{userList.age}</td>
                <td>
                  <Link to={`/update/${userList._id}`} className="btn btn-success">Edit User</Link>
                  {"  "}
                  <Link to={`/delete/${userList._id}`} className="btn btn-danger">Delete User</Link>
                  {"  "}
                  <Link to={`/user-details/${userList._id}`} className="btn btn-info">ℹ️</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>User List Not Found</h1>
      </div>
    );
  }
};

export default Read;
