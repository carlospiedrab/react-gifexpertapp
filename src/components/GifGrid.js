// Va a traer los Gif
import React /*, {useEffect, useState}*/ from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/GetGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setimages] = useState([]);

   const { data:images, loading} = useFecthGifs(category);

  
   
    
//    getGifs();

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading..</p>}
            <div className="card-grid">
                            
                {
                    images.map( img => (    // Destructuracion de images images.id, images.title
                        //  <li key={id}>{title}</li>
                        <GifGridItem
                        key={img.id}
                        {...img}/>
                    ))
                }
                
            </div>
        </>
    )
}
