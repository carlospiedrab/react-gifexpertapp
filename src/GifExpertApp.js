import React, {useState} from 'react'
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

// const categories =['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setcategories] = useState(['One Punch']);

//   const handleAdd = () => {
//      //setcategories([...categories,'HunterxHunter']);
//      setcategories(cats => [...categories,'HunterxHunter']);
//   }

    return (
        <>
          <h2>Gif Expert App</h2>
          <Addcategory setCategories={setcategories}/>
          <hr/>  
          
          <ol>
             {
               //   categories.map( category => {
               //      return <li key={category}> {category}</li>
               //   })
               categories.map( category => (
                  <GifGrid 
                  key={category}
                  category={category} />
               ))
             }
          </ol>
        </>
    )
}
