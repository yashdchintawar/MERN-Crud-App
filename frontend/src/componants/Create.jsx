import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [userCreatedResponse, setUserCreatedResponse] = useState({});
  const [userCreateError, setUserCreateError] = useState("");

  const handleCreateUserSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

    try {
      const response = await axios.post("http://localhost:5000/add", addUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUserCreatedResponse(response.data);
      setUserCreateError("");
      Swal.fire({
        title: "User Created!",
        text: `Hey ${response.data.data.name}, Your Account Created Successfully!`,
        icon: "success",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      setUserCreateError(error);
      Swal.fire({
        title: "User Not Created!",
        text: userCreateError,
        icon: "error",
      });
    }
  };

  return (
    <div className="container my-2">
      <div>
      <h2>Enter The User Data To Create Account!</h2>
      <Link to={"/"} className="btn btn-success">View All Users</Link>
      </div>
      <form onSubmit={handleCreateUserSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
