import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Product from './product/index'
import {BrowserRouter,
    Routes,Route} from "react-router-dom";
import ProductList from "./product/show/productList";
import ProductDetails from "./product/show/productDetails";
function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
                    <Route index element={<Product />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetails />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
