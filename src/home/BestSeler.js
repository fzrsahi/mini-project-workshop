import { useEffect, useState } from "react";
import { config } from "../config";
import axios from "axios";

export function BestSeler() {
  const [products, setProducts] = useState([]);
  const url = config.API_BESTSELER_URL;

  useEffect(() => {
    axios.get(url).then((result) => {
      setProducts(result.data.products);
    });
  }, []);

  return (
    <div className="container d-flex justify-content-between">
      {products.map((product) => (
        <div class="border rounded ">
          <div class="col p-4 d-flex flex-column text-white rounded bg-dark p-5">
            <h3 class="mb-0">{product.title}</h3>
            <div class="mb-1  text-white">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(product.price)}
            </div>
            <p class="mb-auto">{product.description}</p>
            <a href="#" class="text-white fw-bold">
              Go Shop
            </a>
          </div>
          <div>
            <img
              src={product.images[0]}
              className="img-fluid"
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}
