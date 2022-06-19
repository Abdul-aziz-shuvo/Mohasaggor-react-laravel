import React, {useEffect, useState} from 'react';
import {useFormik} from "formik";
import './index.css'
import ColorFamily from "./form/data/colorFamily/ColorFamily";
import Sizes from "./form/data/size/sizes";
import Colors from "./form/data/colors";
import ProductInfo from "./form/data/productInfo";
import * as yup from 'yup';

import {Link, useNavigate} from "react-router-dom";
import Api from "../Api/api";

const Index = () => {
    const navigate = useNavigate();
    const [isColorSet, setColor] = useState(false)

    const deleteColorFamily = (index) => {

        formik.values.stock.splice(index, 1)

        //this setState is just for render
        setColor(!isColorSet)

    }
    const deleteSize = (index, sizeIndex) => {

        formik.values.stock[index].sizes.splice(sizeIndex, 1)

        //this setState is just for render
        setColor(!isColorSet)

    }

    const handleColor = () => {
        let isExists = formik.values.stock.some(e => e.color === formik.values.color)

        if (formik.values.sizes.length === 0) {
            return alert('At least one size have to be selected')
        }
        if (!isExists && formik.values.color !== '' && formik.values.sizes.length !== 0) {
            let sizeArray = formik.values.sizes.map((item) => (
                {
                    size: item,
                    quantity: 1
                }
            ))

            formik.values.stock.push({
                color: formik.values.color,
                sizes: [...sizeArray]
            })
            formik.setFieldValue('color', '')
            formik.setFieldValue('sizes', [])
            setColor(true)

        } else {
            alert('This Color Already Exists')
        }

    }

    let schema = yup.object().shape({

        sub_sub_category: yup.string().required(),
        name: yup.string().required(),
        price: yup.number().required().positive().integer(),
        sell_price: yup.number().required().positive().integer(),


    });
    const formik = useFormik({
        initialValues: {
            sub_sub_category: '',
            name: '',
            price: '',
            sell_price: '',
            color: '',
            sizes: [],
            stock: [],


        },
        validationSchema: schema,
        onSubmit: async values => {
            await Api.post('/add-product', values);
            navigate('/products')

        },
    });

    useEffect(() => {

    }, [formik, isColorSet])
    return (
        <div className='container main mx-auto'>

            <Link to='/products'>
                <button className='btn btn-primary my-3'>All Products</button>
            </Link>

            <h1>Product Info Add</h1>
            <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                <div className='row'>
                    <div className="col-6">
                        <ProductInfo formik={formik} errors={formik.errors}/>
                    </div>
                    <div className="col-6">

                        <div className="mb-3">

                            <Colors formik={formik} isColorSet={isColorSet} />

                        </div>
                        <div className="mb-3">

                            <Sizes formik={formik} isColorSet={isColorSet}/>

                        </div>
                        <button className='btn btn-primary' type='button' onClick={handleColor}>Add</button>
                    </div>

                    <div className="col-12 mt-5">

                        <ColorFamily deleteColorFamily={deleteColorFamily} deleteSize={deleteSize} formik={formik}/>

                    </div>
                </div>

                <button type="submit" className="btn btn-primary my-5"
                        disabled={formik.values.stock.length === 0}>Submit
                </button>
            </form>


        </div>
    );
};

export default Index;