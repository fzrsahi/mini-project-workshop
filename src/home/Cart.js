import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import { config } from "../config";
import axios from "axios";

export function Cart() {
  let { carts, setCarts, newCarts, setCartsLength, cartLength } =
    useContext(DataContext);
  let [totalPrice, setTotal] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    const total = carts.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);

    setTotal(total);
  }, [carts]);

  console.log({ totalPrice });
  const handleMinus = () => {};
  const handlePlus = (cart) => {
    setQuantity((prev) => prev + 1);

    const newTotal = carts.reduce((acc, item) => {
      return (
        acc +
        (item.id === cart.id
          ? item.price * (quantity + 1)
          : item.price * item.quantity)
      );
    }, 0);

    setTotal(newTotal);
  };

  const counts = {};
  carts.forEach(function (cart) {
    counts[cart.id] = (counts[cart.id] || 0) + 1;
  });

  return (
    <div>
      <div className="container" style={{ marginTop: "10em" }}>
        <div
          className="bg-white border rounded-5 p-5"
          style={{ marginBottom: "220px", marginTop: "220px" }}
        >
          <section className="p-5">
            <div className="row">
              <div className="col">
                <div className="table-responsive">
                  <div className="table ">
                    <thead>
                      <tr>
                        <th>Shoping Bag</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts.map((cart) => (
                        <>
                          {cart.quantity == 0 ? (
                            ""
                          ) : (
                            <tr>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={cart.images[0]}
                                    className="img-fluid rounded-3 w-25"
                                    alt="Book"
                                  ></img>
                                  <div className="flex-column ms-4">
                                    <p className="mb-2">{cart.title}</p>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">{cart.category}</td>
                              <td className="align-middle">
                                <div className="d-flex flex-row">
                                  <button
                                    onClick={() => {
                                      setQuantity(cart.quantity);
                                      setCartsLength((cartLength -= 1));
                                      cart.quantity -= 1;
                                      const total = carts.reduce(
                                        (accumulator, item) => {
                                          return (
                                            accumulator +
                                            item.quantity * item.price
                                          );
                                        },
                                        0
                                      );

                                      setTotal(total);
                                    }}
                                    className="btn btn-link px-2"
                                  >
                                    <i className="bi bi-dash"></i>
                                  </button>
                                  <input
                                    id="form1"
                                    min="0"
                                    value={cart.quantity}
                                    name="quantity"
                                    type="number"
                                    className="form-control form-control-sm w-25"
                                  ></input>
                                  <button
                                    className="btn btn-link px-2"
                                    onClick={() => {
                                      setQuantity(cart.quantity);
                                      cart.quantity += 1;
                                      console.log(totalPrice);
                                      const total = carts.reduce(
                                        (accumulator, item) => {
                                          return (
                                            accumulator +
                                            item.quantity * item.price
                                          );
                                        },
                                        0
                                      );

                                      setTotal(total);
                                    }}
                                  >
                                    <i className="bi bi-plus"></i>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle">
                                {new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format(cart.price * cart.quantity)}
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                    <tfoot>
                      <div className="mt-5 ms-2">
                        <h5 className=" p-3 rounded-5">
                          Total :
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(totalPrice)}
                        </h5>
                      </div>
                    </tfoot>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
