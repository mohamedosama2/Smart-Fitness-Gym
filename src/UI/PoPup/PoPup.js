import React, { useContext, useEffect, useRef, useState } from "react";
import ForgetPassword from "../../Components/authentication/forgetPassword";
import Login from "../../Components/authentication/login";
import ResetPassword from "../../Components/authentication/resetPassword";
import Signup from "../../Components/authentication/signup";
import Verify from "../../Components/authentication/verify";
import Choose from "../../Components/authentication/chooseWay";
import VerifyEmail from "../../Components/authentication/verifyEmail";
<<<<<<< HEAD
import "./PoPup.css";
import X from "../../images/svg/X.svg";

function PoPup(props) {
=======
import FoodPopup from "../../Components/foodPopup";
import "./PoPup.css";
import X from "../../images/svg/X.svg";


function PoPup(props) {
  // console.log(props.outer)
>>>>>>> eb14e2959be1b93a59a06b680fa1a20037ab8c13
  const ele = useRef();
  useEffect(() => {
    if (props.open === true) {
      ele.current.style.transform = "translateY(0%)";
      ele.current.style.visibility = "visible";
    } else {
      ele.current.style.transform = "translateY(100%)";
      ele.current.style.visibility = "hidden";
    }
  }, [props.open]);
  return (
    <div className="PoPup" ref={ele}>
      {props.url === "/login" ? (
        <Login openHandler2={props.clickHandler2} />
      ) : props.url === "/verify" ? (
        <Verify openHandler2={props.clickHandler2} />
<<<<<<< HEAD
      ) : props.url === "/verifyEmail"  ? (
=======
      ) : props.url === "/verifyEmail" ? (
>>>>>>> eb14e2959be1b93a59a06b680fa1a20037ab8c13
        <VerifyEmail openHandler2={props.clickHandler2} />
      ) : props.url === "/reset" ? (
        <ResetPassword openHandler2={props.clickHandler2} />
      ) : props.url === "/forget" ? (
        <ForgetPassword openHandler2={props.clickHandler2} />
      ) : props.url === "/chooseWay" ? (
        <Choose openHandler2={props.clickHandler2} />
<<<<<<< HEAD
      ) : (
        <Signup openHandler2={props.clickHandler2} method={props.method} />
=======
      ) : props.url === "/food" ? (
        <FoodPopup openHandler2={props.clickHandler2} food={props.method} outer={props.outer} inner={props.inner} />
      ) : (
        <Signup openHandler2={props.clickHandler2} method={props.method}  />
>>>>>>> eb14e2959be1b93a59a06b680fa1a20037ab8c13
      )}

      <img src={X} alt="X" className="X" onClick={() => props.closeHandler()} />
    </div>
  );
}

export default PoPup;
