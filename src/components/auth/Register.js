import { useState, useEffect } from "react";
import registerImg from "../../assets/register.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

const Register = ({ onLogin, onShowPassword, onTogglePassword }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const [passComplete, setPassComplete] = useState(false);

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  const handlePasswordChange = (e) => setPass(e.target.value);

  useEffect(() => {
    //check Lower and Uppercase
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    //check number
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    //check pass character
    if (pass.match(/([!, %, &, @, #, $, ^, *, ?, _, ~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }

    if (pass.length >= 8) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    if (passLength && passLetter & passChar & passNumber) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [pass, passLetter, passLength, passChar, passNumber]);
  return (
    <div className="main-container --flex-center">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --center">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email" />
          <div className="password">
            <input
              type={onShowPassword ? "password" : "text"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePasswordChange}
            />

            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <button
            disabled={passComplete}
            className={
              passComplete
                ? "--btn --btn-primary --btn-block"
                : "--btn --btn-primary --btn-block btn-disabled"
            }
          >
            Register
          </button>
          <span className="--text-sm --block">
            have an account?{" "}
            <a href="#" onClick={onLogin}>
              Login
            </a>
          </span>
          {/* {password strength indicator} */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password Strength Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Numbers(0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special Character (!@#$%^&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {" "}
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; At least 8 Characters
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>

      <div className="img-container">
        <img src={registerImg} alt="login" />
      </div>
    </div>
  );
};

export default Register;
