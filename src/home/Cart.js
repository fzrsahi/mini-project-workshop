import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Cart() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="bg-white border rounded-5">
          <section className="p-5">
            <div className="row">
              <div className="col">
                <div className="table-responsive">
                  <div className="table ">
                    <thead>
                      <tr>
                        <th>Shoping Bag</th>
                        <th>Format</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div class="d-flex align-items-center">
                            <img
                              src="https://i.imgur.com/2DsA49b.webp"
                              class="img-fluid rounded-3 w-25"
                              alt="Book"
                            ></img>
                            <div class="flex-column ms-4">
                              <p class="mb-2">Thinking, Fast and Slow</p>
                              <p class="mb-0">Daniel Kahneman</p>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">Buku</td>
                        <td class="align-middle">
                          <div class="d-flex flex-row">
                            <button class="btn btn-link px-2">
                              <i class="bi bi-dash"></i>
                            </button>
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              type="number"
                              class="form-control form-control-sm w-25"
                            ></input>
                            <button class="btn btn-link px-2">
                              <i class="bi bi-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td className="align-middle">Rp. 10000</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="d-flex align-items-center">
                            <img
                              src="https://i.imgur.com/2DsA49b.webp"
                              class="img-fluid rounded-3 w-25"
                              alt="Book"
                            ></img>
                            <div class="flex-column ms-4">
                              <p class="mb-2">Thinking, Fast and Slow</p>
                              <p class="mb-0">Daniel Kahneman</p>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">Buku</td>

                        <td class="align-middle">
                          <div class="d-flex flex-row">
                            <button class="btn btn-link px-2">
                              <i class="bi bi-dash"></i>
                            </button>
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              type="number"
                              class="form-control form-control-sm w-25"
                            ></input>
                            <button
                              class="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i class="bi bi-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td className="align-middle">Rp. 10000</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <div className="mt-5 ms-2">
                        <h5 className=" p-3 rounded-5">
                          Total Price : Rp. 50000000
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
      <Footer />
    </div>
  );
}
