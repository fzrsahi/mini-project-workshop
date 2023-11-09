import React, { useState } from "react";
import * as Components from './Components';

export function Login() {
  const [signIn, toggle] = React.useState(true);
  const [accountDetail, setAccountDetail] = React.useState([])
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [insertedUsername, setInsertedUsername] = React.useState('')
  const [insertedPassword, setInsertedPassword] = React.useState('')


  const handleRegister = (name, emails, pass) => {
    setUsername(name)
    setEmail(emails)
    setPassword(pass)
    console.log(username)
    console.log(email)
    console.log(username)
    if (insertedUsername === "" || insertedPassword === "") {
      alert("Password Jangan Kosong")
    } else if (insertedUsername !== username || insertedPassword !== password) {
      alert("Username atau Password Salah")
    } else {
      alert("Berhasil Login")
    }
  }

  const handleLogin = () => {
    if (insertedUsername === "" || insertedPassword === "") {
      alert("Password Jangan Kosong")
    } else if (insertedUsername !== username || insertedPassword !== password) {
      alert("Username atau Password Salah")
    } else {
      alert("Berhasil Login")
    }
  }


  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input onChange={(e) => setUsername(e.target.value)} value={username} type='text' placeholder='username' required />
          <Components.Input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email' required />
          <Components.Input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='password' required />
          <h5000 className="fw-normal mb-1 mx-5 w-100" style={{ letterSpacing: '1px' }}>We'll never share your password with anyone else.</h5000>
          <Components.Button type="button" onClick={e => {
            handleRegister(username, email, password)}}>Register</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input onChange={(e) => setInsertedUsername(e.target.value)} value={insertedUsername} type='username' placeholder='Username' required />
          <Components.Input onChange={(e) => setInsertedPassword(e.target.value)} value={insertedPassword} type='password' placeholder='Password' required />
          <Components.Button type="button" onClick={() => handleLogin()}>Login</Components.Button>
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
              Don't have an account yet? Please register first to continue shopping at naruto's shop
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Register
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container>
  )
}
