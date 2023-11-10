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
      toast("Isi yang niat");
    } else {
      setUserName(name);
      setPassWord(pass);
      toast("Ciee bisa buat akun");
    }
  };

  const handleLogin = (username, password) => {
    const handleError = username && password;
    if (!handleError) {
      return toast("Isi dulu yang bener");
    }
    if (username == userName && password == passWord) {
      toast("Berhasil Login");
      setIsLogin(true);
    } else {
      toast("Username atau password Salah nih bang gabisa login");
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account Disini</Components.Title>
          <Components.Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Usernamenya jangan alay"
            required
          />
          <Components.Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Example@gmail.com"
            required
          />
          <Components.Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password yang gampang aja"
            required
          />
          <h5000
            className="fw-normal mb-1 mx-5 w-100"
            style={{ letterSpacing: "1px" }}
          >
            Rahasia password yang tau cuma kamu dan tuhan aja yang tau, saya
            juga tau.
          </h5000>
          <Components.Button
            type="button"
            onClick={(e) => {
              handleRegister(username, email, password);
            }}
          >
            Register Dulu Baru Login
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
          <Components.Title>Login Dulu Fren</Components.Title>
          <Components.Input
            onChange={(e) => setInsertedUsernameRegister(e.target.value)}
            value={insertedUsernameRegister}
            type="username"
            placeholder="Masukin Username"
            required
          />
          <Components.Input
            onChange={(e) => setInsertedPasswordLogin(e.target.value)}
            value={insertedPasswordLogin}
            type="password"
            placeholder="Password Jangan Ngasal"
            required
          />
          <Components.Button
            type="button"
            onClick={() =>
              handleLogin(insertedUsernameRegister, insertedPasswordLogin)
            }
          >
            Login Disini
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
            <Components.Title>
              Udah bikin akunnya? yaudah login dulu
            </Components.Title>
            <Components.Paragraph>
              Login dulu abis itu foya-foya
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Nih Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>
              Hello, Welcome To Doraemon Shop!
            </Components.Title>
            <Components.Paragraph>
              DORAEMON: Digital Outlet Ritel Aneka Elektronik Modern Oleh
              Fazhrul And Biafra
            </Components.Paragraph>
            <Components.Paragraph>
              Gapunya akun doraemon? bikin dulu biar bisa hamburin uang.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Nih Register
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}
