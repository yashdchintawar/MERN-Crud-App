import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./componants.css";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-user-detail/${userId}`)
      .then((response) => setUserDetails(response.data.data));
  }, [userId]);
  return (
    <div className="container my-2">
      <h2>User Details</h2>
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
              CLOSE
            </Link>
            {"   "}
            <Link
              to={`/delete/${userDetails._id}`}
              className="btn btn-danger"
            >
              DELETE USER
            </Link>
            </div>
          </div>
          <div className="col">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/user-details.gif"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
