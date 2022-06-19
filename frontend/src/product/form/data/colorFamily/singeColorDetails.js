import React, {useEffect, useRef, useState} from 'react';
import PreviewImages from "./previewImages";

const SingeColorDetails = ({item, formik, deleteColorFamily, deleteSize, ParentKey}) => {
    const imgRef = useRef()
    const [imagesFile, setImagesFile] = useState([])
    const handleImage = (files) => {
        setImagesFile(files) //for preview the image when use select some image
    }
    const filedReadAsBase64 = (e) => {

        let filesToUpload = []
        Object.values(e.target.files).forEach((image, key) => {
            var fileReader = new FileReader();

            fileReader.readAsDataURL(image)

            fileReader.onloadend = function () {

                filesToUpload.push(fileReader.result)
            };
        })

        return filesToUpload
    }

    const AddFileToFormik = (key, filesToUpload) => {

        let images = formik.values.stock.map((val, valKey) => {
            if (parseInt(valKey) === parseInt(key)) {
                return val = {
                    color: val.color,
                    sizes: val.sizes,
                    images: filesToUpload
                }
            }
            return val
        })

        formik.setFieldValue('stock', images)

    }

    const handleSizes = (event, ColorFamilyKey, sizeKey) => {

        let stockArray = formik.values.stock.map((val, valKey) => {

            if (parseInt(valKey) === parseInt(ColorFamilyKey)) {
                return val = {
                    color: val.color,
                    sizes: val.sizes.map((item, index) => {
                        if (parseInt(index) === parseInt(sizeKey)) {
                            return {
                                size: item.size,
                                quantity: parseInt(event.target.value),
                            }
                        }
                        return item
                    }),
                    images: val.images
                }
            }
            return val
        })


        formik.setFieldValue(`stock`, [...stockArray])
    }

    const deleteFamily = (deleteKey) => {
        deleteColorFamily(deleteKey)
    }

    useEffect(() => {

    }, [imagesFile])
    return (
        <>
            <div className="mb-3 d-flex justify-content-evenly">
                <div>
                    <button type={'button'} onClick={() => deleteFamily(ParentKey)}
                            className={'btn btn-danger'}>X
                    </button>
                </div>
                <h3>{item.color}</h3>
                <div>
                    <input type="file" ref={imgRef} name='images' multiple
                           onChange={(e) => {
                               let base64FilesArray = filedReadAsBase64(e)
                               AddFileToFormik(ParentKey, base64FilesArray)
                               handleImage(Object.values(e.target.files))
                           }}/>
                    {
                        imagesFile.length > 0 && <PreviewImages imagesFile={[...imagesFile]}
                                                                setImagesFile={setImagesFile} formik={formik}
                                                                stockIndex={ParentKey} imgRef={imgRef}/>
                    }
                </div>
                <div className="mb-3">
                    <table className='table table-striped table-bordered '>
                        <thead>
                        <th>
                            Size
                        </th>
                        <th>
                            Stock Quantity
                        </th>
                        <th>
                            Action
                        </th>
                        </thead>
                        <tbody>
                        {
                            item.sizes.map((item, sizeKey) => (

                                <tr>
                                    <td>
                                        {item.size}
                                    </td>

                                    <td>
                                        <input type="number" min={1} name='qunatity'
                                               onChange={(e) => {
                                                   handleSizes(e, ParentKey, sizeKey)
                                               }}
                                               value={item.quantity}
                                               className='border form-control'/>
                                    </td>
                                    <td>
                                        <button type='button' disabled={sizeKey === 0}
                                                className='btn btn-danger bg-danger'
                                                onClick={() => deleteSize(ParentKey, sizeKey)}>X
                                        </button>
                                    </td>
                                </tr>

                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default SingeColorDetails;