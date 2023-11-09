import { useContext } from "react";
import { DataContext } from "../App";
import { BestSeler } from "./BestSeler";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import "./style/index.css";
import { Cart } from ".";

export function Home() {
  const {
    isCartsPages,
    setIsCartsPages,
    isLoginPages,
    setIsLoginPages,
    isHomePages,
    setIsHomePages,
  } = useContext(DataContext);

  // setIsHomePages(true);

  // setIsCartsPages(false);
  return (
    <div>
      <Navbar />

      {/* <div className="container-fluid mt-5">
        <div className="container">
          <div className="d-flex justify-content-between text-white rounded bg-dark p-5">
            <div className="">
              <h1 class="display-4 fst-italic">Best For Your Game</h1>
              <p class="lead my-3 ">
                Deserunt eu officia cillum fugiat nostrud proident exercitation
                occaecat consectetur. Veniam magna velit laboris laborum laboris
                quis. Deserunt nisi consequat exercitation laborum deserunt
                dolor excepteur. Eiusmod adipisicing voluptate culpa sit qui
                quis voluptate. Laborum culpa do consequat elit duis id amet in.
                Tempor ea dolor eu voluptate id aliqua est officia qui.
              </p>
              <p class="lead mb-0">
                <a href="#" class="text-white fw-bold">
                  Go Shop
                </a>
              </p>
            </div>
            <div className="">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/PS5-Controller-PNG-Image.png"
                className="img-fluid rotated"
              ></img>
            </div>
          </div>
        </div>
        <div className="container text-center mt-5">
          <h1>Our Products</h1>
          <p>here are many variations passages</p>
        </div>

        <div className="container">
          <Products />
        </div>

        <div className="container text-center mt-5">
          <h1>Best Seller Products</h1>
          <p>here are many variations passages</p>
        </div>
        <BestSeler />
      </div> */}

      {isHomePages ? <Products /> : <Cart />}

      <Footer />
    </div>
  );
}
