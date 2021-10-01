import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
    //   { email: email.current.value, password: password.current.value },
    //   dispatch
    // );

    { email: 'username@email.com', password: '123456789' },
    dispatch
  );

  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            <img src="https://res.cloudinary.com/at100dev/image/upload/v1633052810/Friends_Again_500_x_300_px_1_bvi3yc.png"/>
          </h3>
          <span className="loginDesc">
          Connect with friends and the world around with Friends Again.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="username@email.com"
              // type="email"
              // required
              className="loginInput"
              ref={email}
              useRef='username@email.com'
              value="username@email.com"
            />
            <input
              placeholder="123456789"
              // type="password"
              // required
              // minLength="6"
              className="loginInput"
              ref={password}
              useRef='123456789'
              value="UniquePass12345~"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
