import React, {useEffect, useState} from 'react';
import Api from "../../../Api/api";

const ProductInfo = ({formik,errors}) => {
    const [categories,setCategories] = useState([])
    const [subCategories,setSubCategories] = useState([])
    const [subSubCategories,setSubSubCategories] = useState([])
    const fetchCategory = async () => {
        let res  = await Api.get('/fetch-category');
       setCategories(res.data)

    }
    const handleSubCategory = async (e) => {
        setSubCategories([])
        setSubSubCategories([])
        let res  = await Api.get(`/fetch-sub-category/${e.target.value}`);
        setSubCategories(res.data)
    }
    const handleSubSubCategory = async (e) => {
        let res  = await Api.get(`/fetch-sub-sub-category/${e.target.value}`);
        setSubSubCategories(res.data)
    }
    useEffect(() => {
        fetchCategory()
    },[])
    return (
        <>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Category</label>
                <select name="category" className='form-control' id="" onChange={handleSubCategory}>
                    <option disabled selected> select category</option>
                    {
                        categories.length > 0 && categories.map(category => (
                            <option value={category.id}>{category.name}</option>
                        ))
                    }
                </select>

            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Sub Category</label>
                <select name="sub_category" className='form-control' id="" onChange={handleSubSubCategory}>
                    <option disabled selected={subSubCategories.length === 0}> select Sub category</option>
                    {
                        subCategories.length > 0 && subCategories.map(subcategory => (
                            <option value={subcategory.id}>{subcategory.name}</option>
                        ))
                    }
                </select>

            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Sub sub Category</label>
                <select name="sub_sub_category" className='form-control' id="" onChange={formik.handleChange}>
                    <option disabled selected={true}> select Sub Sub category</option>
                    {
                        subSubCategories.length > 0 && subSubCategories.map(subSubcategory => (
                            <option value={subSubcategory.id}>{subSubcategory.name}</option>
                        ))
                    }
                </select>
                {errors.sub_sub_category ?
                    <div className='text-danger fw-bold'>{formik.errors.sub_sub_category}</div> : null}
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="name" onChange={formik.handleChange}
                       aria-describedby="name" />
                {errors.name ?
                    <div className='text-danger fw-bold'>{formik.errors.name}</div> : null}
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" onChange={formik.handleChange}
                       aria-describedby="price" />
                {errors.price ?
                    <div className='text-danger fw-bold'>{formik.errors.price}</div> : null}
            </div>

            <div className="mb-3">
                <label htmlFor="sell_price" className="form-label">Sell Price</label>
                <input type="number" className="form-control" id="sell_price" onChange={formik.handleChange}
                       aria-describedby="name" />
                {errors.sell_price ?
                    <div className='text-danger fw-bold'>{formik.errors.sell_price}</div> : null}
            </div>
        </>
    );
};

export default ProductInfo;