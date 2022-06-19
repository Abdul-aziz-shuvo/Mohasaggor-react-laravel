import React, {useEffect, useState} from 'react';
import Checkbox from "./checkbox";
import Api from "../../../../Api/api";

const Sizes = ({formik}) => {
    const [sizes,setSizes] = useState([])
    const fetchSize = async () => {
       let res = await Api.get('fetch-size');
       setSizes(res.data)
    }
    useEffect(() => {
        fetchSize()
    },[])
    return (
        <>
            <h3>Size</h3>
            <div className='row'>
                {sizes.map(value => (
                        <>
                            <div className="col-2">
                                <Checkbox  fieldName={'sizes'} mainValue={formik.values.sizes} value={value} formik={formik}/>

                            </div>
                        </>
                    ))
                }

            </div>
        </>
    );
};

export default Sizes;