
import {useEffect, useState} from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFecthGifs =(category)=> {
    const [state, setstate] = useState({
        data: [],
        loading: true 
    });

    useEffect(() => {
        
     getGifs(category)
     .then( img => {
        setTimeout( ()=> {
            setstate({
                data: img,
                loading: false 
             });
        },2000);

        
     })

    }, [category])

   

    return state;
}