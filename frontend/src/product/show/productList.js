import React, {useEffect, useState} from 'react';
import Api from "../../Api/api";
import {Link} from "react-router-dom";

const ProductList = () => {
    const [products,setProducts] = useState([])
    const   fetchAllProduct =  async   ()  => {
        let res = await Api.get('/products')
       setProducts(res.data)
    }
    useEffect(() => {
        fetchAllProduct()
    },[])
    return (
        <div className='container my-5'>
            <h3 className={'my-3'}>
                <Link to={'/'}>
                    <button className='btn btn-primary'>
                        Add Product
                    </button>
                </Link>
            </h3>
           <table className='table table-light '>
               <thead>
                    <th>Product Name</th>
               </thead>
               <tbody>
               {
                   products.length > 0 && products.map((product) => (
                       <tr>
                           <td>
                               <Link to={`/product/${product.id}`} href=""> {product.name}</Link>
                           </td>
                       </tr>
                   ))
               }
               </tbody>
           </table>
        </div>
    );
};

export default ProductList;