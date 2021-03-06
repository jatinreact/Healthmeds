import React, { useState } from "react";
import HOC from "../../Common/Hoc";
import { Button, Card, TextField } from "@material-ui/core";
import axios from "axios";
import Loder from "../Loder/Loder";
//import css
import "./AdminLogin.css";

const Resetpassword = (props) => {
  const [isloading, setisloading] = useState(false);
  let email = props.location.state.email;

  const [code, setcode] = useState("");
  const [password, setpassword] = useState("");

  const Resetpassword = () => {
    let url = "https://secure-river-15887.herokuapp.com/email-sendAdmin";
    setisloading(true);
    let temp = {
      email,
      code,
      password,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data response:::", res);
          props.history.push("/home");
          setisloading(false);
        },

        (error) => {
          console.log("data response error:::", error);
          setisloading(false);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
        setisloading(false);
      });
  };

  return (
    <div>
      <div className="admin_card">
        <h5 className="font_change ml-2 mb-4">
          <i class="fa fa-lock"></i> Please enter your OTP.
        </h5>
        <Card className="card_shadow">
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Email Id"
            type="text"
            autoComplete="Enter Email"
            value={email}
          />
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Enter OTP"
            type="text"
            autoComplete="off"
            value={code}
            onChange={(e) => {
              setcode(e.target.value);
            }}
          />
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Enter New Password"
            type="text"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />

          {/* <span className="forgot_pass ml-3">Forgotten Password</span> */}
          <br />
          <span className="text-center mt-2">
            <Button
              color="primary"
              className="login_btn text-centre ml-2 mt-2 mb-3 mt-3"
              onClick={Resetpassword}
            >
              Verify
            </Button>
          </span>
        </Card>
      </div>
      <Loder loading={isloading} />
    </div>
  );
};

export default HOC(Resetpassword);
