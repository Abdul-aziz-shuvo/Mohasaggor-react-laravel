import React, {useEffect} from 'react';

const Checkbox = ({fieldName,formik,value,mainValue}) => {


    return (
      <label>
          <input
              type="checkbox"
              name="sizes"
              value={value.name}
              checked={mainValue.includes(value.name)}
              onChange={(e) => {
                  const { checked,value } = e.target;
                  if(checked){
                      formik.setFieldValue(`${fieldName}`, [...mainValue, value]);
                  }else{
                      formik.setFieldValue(
                          `${fieldName}`,
                          mainValue.filter((v) => v !== value)
                      );
                  }
              }}

          />
         <span className='ml-3'>  {value.name}</span>
      </label>
    );
};

export default Checkbox;