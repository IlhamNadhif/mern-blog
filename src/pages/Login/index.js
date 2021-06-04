import React from "react";
import { useHistory } from "react-router";
import { LoginBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBG} alt="login" className="bg-image" align="imageBG" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Gap height={20} />
        <Input label="Email" placeholder="Email" />
        <Gap height={20} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Login" onClick={()=>{history.push("/")}} />
        <Gap height={60} />
        <Link title="Belum punya akun? Silahkan daftar!!" onClick={()=>{history.push("/register")}}  />
      </div>
    </div>
  );
};

export default Login;
