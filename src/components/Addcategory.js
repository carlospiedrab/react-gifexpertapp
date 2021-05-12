import React, {useState} from 'react'
import PropTypes from "prop-types";

export const Addcategory = ({setCategories}) => {

const [inputValue, setinputValue] = useState('');
const handleInputChange = (e) => {
    //console.log(e.target.value);
    setinputValue(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();

  if(inputValue.trim().length>2){
    setCategories(cats => [inputValue,...cats]);
    setinputValue('');
  }
  
}


    return (
    
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange}/>
        </form>
          
    )
}

// PropTypes basicamente valida los campos o propiedades
Addcategory.propTypes = {
     setCategories: PropTypes.func.isRequired
}