import React, {useEffect, useRef, useState} from 'react';
import PreviewImages from "./previewImages";
import SingeColorDetails from "./singeColorDetails";


const ColorFamily = ({formik, deleteColorFamily, deleteSize}) => {


    return (
        <>
            {
                formik.values.stock.length > 0 &&

                <div className='border p-3'>
                    {
                        formik.values.stock.map((item, key) => (
                           <SingeColorDetails item={item} ParentKey={key} formik={formik} deleteColorFamily={deleteColorFamily} deleteSize={deleteSize}
                                              />
                        ))
                    }


                </div>
            }

        </>
    );
};

export default ColorFamily;