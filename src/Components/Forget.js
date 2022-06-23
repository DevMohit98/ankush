import React, { useState } from "react";
import logo1 from "../logo1.png";
import { Link } from "react-router-dom";

const Forget = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="container-fluid body">
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left my-5">
          <img className="w-25 mx-auto d-block pt-5" src={logo1} alt="" />
          <p className="text-center">We love creative Business Ideas</p>
          <form>
            <div className="form-group pt-4">
              <p className="Message">
                Please enter your email address. You will receive a link to
                create a new password via email.{" "}
              </p>
              <label className="textLeft mt-2" style={{ color: "#959595" }}>
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                type="email"
                placeholder="Enter email"
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-lg mt-5 buttonColor " type="button">
                Get New Password
              </button>
            </div>

            <div className="text-center mt-5">
              <Link to="/" className="text-center mt-5 BackButton link">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
