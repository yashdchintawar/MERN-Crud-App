import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import "./componants.css";

const Delete = () => {
  const [userDetails, setUserDetails] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-user-detail/${userId}`)
      .then((response) => setUserDetails(response.data.data));
  }, [userId]);

  const handleDeleteuser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/delete-user/${userId}`).then(
        Swal.fire({
          title: "User Deleted!",
          text: `Hey ${userDetails.name}, Your Account Deleted!`,
          icon: "success",
        }).then(() => {
          window.location.href = "/";
        })
      );
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete user.",
        icon: "error",
      });
    }
  };
  return (
    <div className="container my-2">
      <h2>Delete User</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <ul className="list-group">
                  <li className="user-details-list-key">ID :</li>
                  <li className="user-details-list-key">Full Name : </li>
                  <li className="user-details-list-key">Email :</li>
                  <li className="user-details-list-key">Age :</li>
                  <li className="user-details-list-key">Created At : </li>
                  <li className="user-details-list-key">last Updated At : </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group">
                  <li className="user-details-list-value">{userDetails._id}</li>
                  <li className="user-details-list-value">
                    {userDetails.name}
                  </li>
                  <li className="user-details-list-value">
                    {userDetails.email}
                  </li>
                  <li className="user-details-list-value">{userDetails.age}</li>
                  <li className="user-details-list-value">
                    {userDetails.createdAt}
                  </li>
                  <li className="user-details-list-value">
                    {userDetails.updatedAt}
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-3">
              <Link to={"/"} className="btn btn-warning">
                CANCEL
              </Link>
              {"   "}
              <button
                className="btn btn-danger"
                onClick={() => {
                  handleDeleteuser(userDetails._id);
                }}
              >
                DELETE USER
              </button>
            </div>
          </div>
          <div className="col">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/user-delete.gif"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
