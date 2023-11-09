import React, { useContext, useState } from "react";
import * as Components from "./Components";
import toast, { Toaster } from "react-hot-toast";
import { DataContext } from "../App";

export function Login() {
  const { setIsLogin, isLogin } = useContext(DataContext);
  const [signIn, toggle] = React.useState(true);
  const [accountDetail, setAccountDetail] = React.useState([]);
  const [userName, setUserName] = React.useState("");
  const [passWord, setPassWord] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [insertedUsernameRegister, setInsertedUsernameRegister] =
    React.useState("");
  const [insertedPasswordLogin, setInsertedPasswordLogin] = React.useState("");

  const handleRegister = (name, emails, pass) => {
    const handleError = name && emails && pass;
    if (!handleError) {
      toast("Bad Request");
    } else {
      setUserName(name);
      setPassWord(pass);
      toast("Berhasil Buat Akun");
    }
  };

  const handleLogin = (username, password) => {
    const handleError = username && password;
    if (!handleError) {
      return toast("Bad Request");
    }
    if (username == userName && password == passWord) {
      toast("Berhasil Login");
      setIsLogin(true);
    } else {
      toast("Username Atau Password Salah");
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="username"
            required
          />
          <Components.Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email"
            required
          />
          <Components.Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            required
          />
          <h5000
            className="fw-normal mb-1 mx-5 w-100"
            style={{ letterSpacing: "1px" }}
          >
            We'll never share your password with anyone else.
          </h5000>
          <Components.Button
            type="button"
            onClick={(e) => {
              handleRegister(username, email, password);
            }}
          >
            Register
          </Components.Button>
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
              },
            }}
          />
        </Components.Form>
      </Components.SignUpContainer>

      <div
        class="toast align-items-center text-white bg-primary border-0"
        role="toast"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">Hello, world! This is a toast message.</div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input
            onChange={(e) => setInsertedUsernameRegister(e.target.value)}
            value={insertedUsernameRegister}
            type="username"
            placeholder="Username"
            required
          />
          <Components.Input
            onChange={(e) => setInsertedPasswordLogin(e.target.value)}
            value={insertedPasswordLogin}
            type="password"
            placeholder="Password"
            required
          />
          <Components.Button
            type="button"
            onClick={() =>
              handleLogin(insertedUsernameRegister, insertedPasswordLogin)
            }
          >
            Login
          </Components.Button>
          <Toaster
            containerStyle={{ position: "absolute" }}
            toastOptions={{
              style: {
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
              },
            }}
          />
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              Please login first and happy shopping spree
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Don't have an account yet? Please register first to continue
              shopping at naruto's shop
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Register
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}
