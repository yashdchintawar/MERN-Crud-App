import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [userCreatedResponse, setUserCreatedResponse] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [userCreateError, setUserCreateError] = useState("");

  const {userId} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-user-detail/${userId}`)
      .then((response) => {
        setUserDetails(response.data.data)
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setAge(response.data.data.age);
      
      });
  }, [userId]);

  const handleUpdateUserSubmit = async (e) => {
    e.preventDefault();
    const updateUser = { name, email, age };

    try {
      const response = await axios.patch(`http://localhost:5000/update-user-details/${userId}`, updateUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUserCreatedResponse(response.data);
      setUserCreateError("");
      Swal.fire({
        title: "User Details Updated!",
        text: `Hey ${response.data.data.name}, Your Account Details Updated Successfully!`,
        icon: "success",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      setUserCreateError(error);
      Swal.fire({
        title: "User Details not able to Update!",
        text: userCreateError,
        icon: "error",
      });
    }
  };

  return (
    <div className="container my-2">
      <div>
      <h2>Update The User Details!</h2>
      <Link to={"/"} className="btn btn-success">View All Users</Link>
      </div>
      <form onSubmit={handleUpdateUserSubmit}>
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
        <button type="submit" className="btn btn-success">
          Change The Details
        </button>{"   "}
        <Link to={"/"} className="btn btn-warning">
          Close
        </Link>
      </form>
    </div>
  );
};

export default Update;
