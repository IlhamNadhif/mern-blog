import React from "react";
import { useHistory } from "react-router";
import { RegisterBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBG} alt="register" className="bg-image" align="imageBG" />
      </div>
      <div className="right">
        <p className="title">Register Page</p>
        <Gap height={20} />
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={20} />
        <Input label="Email" placeholder="Email" />
        <Gap height={20} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button
          title="Register"
          onClick={() => {
            history.push("/login");
          }}
        />
        <Gap height={60} />
        <Link
          title="Kembali Login"
          onClick={() => {
            history.push("/login");
          }}
        />
      </div>
    </div>
  );
};

export default Register;
