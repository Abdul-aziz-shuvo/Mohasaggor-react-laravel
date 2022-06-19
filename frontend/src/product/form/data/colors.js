import React, {useEffect, useState} from 'react';
import Api from "../../../Api/api";

const Colors = ({isColorSet,formik,errors}) => {
    const [colors,setColors] = useState([]);
    const fetchColor = async () => {
        let res = await Api.get('fetch-color');
        setColors(res.data)
    }
    useEffect(() => {
        fetchColor()
    },[])
    return (
        <>
            <label htmlFor="color" className="form-label">Color</label>
            <select name="color" className='form-control' onChange={formik.handleChange} id="color">
                <option selected={isColorSet === true} disabled={isColorSet === true}> Select Color</option>
                {
                    colors.map((value) => (
                        <option value={value.name}> {value.name}</option>

                    ))
                }
            </select>

        </>
    );
};

export default Colors;