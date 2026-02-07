import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreSearch } from "./fakestore-search";
import { FakestoreResults } from "./fakestore-results";

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-2">
                    <h1>  <span className="bi bi-bag"> Shopping <Link to="/search" className="bi text-white text-decoration-none bi-search">  </Link> </span> </h1>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<FakestoreHome />} />
                        <Route path="products/:category" element={<FakestoreProducts />}>
                            <Route path="details/:id" element={<FakestoreDetails />} />
                        </Route>
                        <Route path="search" element={<FakestoreSearch />} />
                        <Route path="results" element={<FakestoreResults />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}