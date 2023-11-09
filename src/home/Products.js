import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { config } from "../config";
import { DataContext } from "../App";
import { BestSeler } from "./BestSeler";
import toast, { Toaster } from "react-hot-toast";

export function Products() {
  let { carts, setCarts, setCartsLength, cartLength } = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const url = config.API_PRODUCTS_URL;
  useEffect(() => {
    axios.get(url).then((result) => {
      setProducts(result.data.products);
    });
  }, []);

  return (
    <div className="container-fluid" style={{ marginTop: "10em" }}>
      <div className="container">
        <div className="d-flex justify-content-between text-white rounded bg-dark p-5">
          <div className="">
            <h1 class="display-4 fst-italic">
              Digital Outlet Ritel Aneka barang Elektronik Modern Oleh biafra
              daN fazrul(DORAEMON-SHOP)
            </h1>
            <p class="lead my-3 ">
              Digital Outlet Ritel Aneka barang Elektronik Modern Oleh biafra
              daN fazrul(doraemon shop) adalah layanan online yang menjual
              berbagai macam barang elektronik modern dengan harga yang
              kompetitif. Toko ini menawarkan berbagai pilihan produk, mulai
              dari HP, LAPTOP, NASIGORENG, hingga ILMU HITAM. Selain itu,
              Doraemon Shop juga menyediakan layanan pengiriman gratis ke
              seluruh Indonesia bahkan sampai to the bone.
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
              className="img-fluid rotated mt-5"
            ></img>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <h1>Our Products</h1>
        <p>here are many variations passages</p>
      </div>

      <div className="container">
        <div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product, index) => (
              <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                <div class="card shadow-sm">
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  ></img>
                  <div class="card-body d-flex flex-column mt-auto ">
                    <h5 class="card-text mt-auto">{product.title}</h5>
                    <p class="card-text ">{product.description}</p>
                    <div class="d-flex justify-content-between align-items-center ">
                      <div class="btn-group ">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary "
                          onClick={() => {
                            axios
                              .get(config.API_BY_ID + product.id)
                              .then((result) => {
                                result = result.data;
                                result["quantity"] = 1;
                                result["totalPrice"] = 0;

                                const existingItem = carts.find(
                                  (cart) => cart.id === result.id
                                );

                                if (existingItem) {
                                  existingItem.quantity += 1;
                                } else {
                                  setCartsLength((cartLength += 1));
                                  carts.push(result);
                                }
                                toast(
                                  result.title + " Ditambahkan Ke Keranjang"
                                );
                              });
                          }}
                        >
                          Add To Cart
                        </button>
                        <Toaster
                          toastOptions={{
                            style: {
                              backgroundColor: "black",
                              color: "white",
                              fontWeight: "bold",
                            },
                          }}
                        />
                      </div>
                      <small class="text-muted">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(product.price)}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h1>Best Seller Products</h1>
        <p>here are many variations passages</p>
      </div>
      <BestSeler />
    </div>
  );
}
