import { useContext, useState } from "react";
import { DataContext } from "../App";
import { Cart } from "./Cart";
import { Login } from "../auth";
import { Home } from ".";

export function Navbar() {
  const { carts, cartLength, is } = useContext(DataContext);

  const {
    isCartsPages,
    setIsCartsPages,
    isLoginPages,
    setIsLoginPages,
    isHomePages,
    setIsHomePages,
  } = useContext(DataContext);
  // const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    setIsHomePages(false);
    setIsCartsPages(true);
  };

  return (
    <div>
      <header>
        <nav className="navbar fixed-top bg-body-tertiary ">
          <div className="container-fluid">
            <div className="d-flex">
              <img
                src="https://www.freepnglogos.com/uploads/real-madrid-logo-png/real-madrid-logo-real-madrid-kits-dream-league-soccer-fts-kuchalana-4.png"
                className="ms-5"
                style={{
                  width: "60px",
                  height: "60px",
                }}
              ></img>
              <a className="navbar-brand ms-2 mt-3" href="#">
                Naruto Shop
              </a>
            </div>
            <button className="btn w-25">
              <i class="bi bi-cart4 fs-3" onClick={handleCart}></i>
              {cartLength < 1 ? (
                ""
              ) : (
                <span className="text-danger"> {cartLength} </span>
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
