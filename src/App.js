import logo from "./logo.svg";
import "./App.css";
import { Login, Register } from "./auth";
import { Home, Cart } from "./home";
import { createContext, useState } from "react";

export const DataContext = createContext({});

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [carts, setCarts] = useState([]);
  const [isCartsPages, setIsCartsPages] = useState([false]);
  const [isLoginPages, setIsLoginPages] = useState([false]);
  const [isHomePages, setIsHomePages] = useState([false]);
  const [cartLength, setCartsLength] = useState(0);

  const contextData = {
    isLogin,
    setIsLogin,
    carts,
    setCarts,
    isCartsPages,
    setIsCartsPages,
    isLoginPages,
    setIsLoginPages,
    isHomePages,
    setIsHomePages,
    cartLength,
    setCartsLength,
  };
  return (
    <DataContext.Provider value={contextData}>
      {isLogin ? <Home /> : <Login />}
    </DataContext.Provider>
  );
}

export default App;
