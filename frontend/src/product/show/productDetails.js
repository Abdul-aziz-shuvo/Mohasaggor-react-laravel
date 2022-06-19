import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Api from "../../Api/api";
import {flushSync} from "react-dom";

const ProductDetails = () => {
    const {id} = useParams()
    const [productDetails, setProductDetails] = useState([])
    const fetchProduct = async () => {
        let res = await Api.get(`/product/${id}`)
        let data = res.data
        let result = [];
        for (const property in data) {
            result.push(data[property])
        }
        setProductDetails(result)
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className='container my-5'>

            <Link to='/products'>
                <button className='btn btn-primary my-3'>All Products</button>
            </Link>
            <table className='table table-dark table-hover table-bordered'>
                <thead className='bg-dark'>
                    <th>Color</th>
                    <th>Image</th>
                    <th>Size</th>
                    <th>Quantity</th>
                </thead>
                <tbody>
                {
                    productDetails.length > 0 && productDetails.map(ProductStock => {

                        return ProductStock.length > 0 && ProductStock.map((product, key) => (
                            <tr>
                                {key == 0 && <td rowSpan={ProductStock.length}>
                                    { product.color.name}
                                </td>
                                }
                                {key == 0 && <td rowSpan={ProductStock.length}>
                                    {
                                        product.image_group.images.map((img) => (
                                            <img src={'http://localhost:8000/storage/product/images/' + img.name}
                                                 width={'100'} height={'150'} className={' mx-3'} alt=""/>
                                        ))
                                    }

                                </td>
                                }
                                <td rowSpan={'1'} colSpan={'1'}>
                                    {product.size.name}
                                </td>
                                <td rowSpan={'1'} colSpan={'1'}>
                                    {product.quantity}
                                </td>
                            </tr>
                        ))
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default ProductDetails;