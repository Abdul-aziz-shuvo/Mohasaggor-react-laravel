import React, {useEffect, useState} from 'react';



const PreviewImages = ({imagesFile,formik,stockIndex,imgRef}) => {


    const [imageUrl,setImageUrl] = useState([])
    const [imagePreviewFile,setImagePreviewFile] = useState(imagesFile)
    const [deleted,setDeleted] = useState(false)
    const [imgRefState,setImageRefState] = useState([])

    const deleteImage = (index) => {

        //remove image form input ref Filelist
        imgRefState.map((value) => {
            var dt = new DataTransfer();
            dt.items.add(value);
            var file_list = dt.files;
            imgRef.current.files = file_list
        })
        imgRefState.splice(index,1)
        //remove image form input ref Filelist

        imageUrl.splice(index,1)
        setImageUrl([...imageUrl])

        imagePreviewFile.splice(index,1)

        let stockArray = formik.values.stock.map((val, key) => {
           if(parseInt(key) === parseInt(stockIndex)){
               return  {
                   color : val.color,
                   sizes : val.sizes,
                   images :  imagePreviewFile
               }
           }
           return  val
        })
        formik.setFieldValue('stock',stockArray)
        setDeleted(true)
    }
    const imageConvert = () => {
        let imgUrl =  imagePreviewFile.length > 0 &&   imagePreviewFile.map((file) => {
            let createUrl = URL.createObjectURL(file)
            return createUrl
        })
        imgUrl.length > 0 && setImageUrl([...imgUrl])
        imgUrl === false && setImageUrl([])


    }
    useEffect(( )=> {

     if(imagePreviewFile.length > 0){
         imageConvert()
     }



    },[imagePreviewFile,imagesFile,deleted])


    useEffect(() => {
    setImagePreviewFile([])
    setImageRefState([...imgRef.current.files])
    },[])
    useEffect(() => {

        deleted == false ?  setImagePreviewFile(imagesFile) :  setImagePreviewFile((prev) => (prev))


    },[imagesFile])

    return (
        <div className='image d-flex'>
            {
                imageUrl.length > 0 && imageUrl.map((img,key) => (
                  <>
                      <a className='text-danger' onClick={() => deleteImage(key)}>X</a>
                      <img src={img} alt="" width='100' height='50' className='img-fluid  m-2'/>

                  </>
                ))
            }
        </div>
    );
};

export default PreviewImages;