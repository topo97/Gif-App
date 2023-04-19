import { useState } from 'react';
import { AddCategory, GifCard } from './components';

export const GifApp = () => {

    const [ categories, setCategories ] = useState([ 'World Champion 2022' ]);

    //  Agragando nuevo estado. evitar usar .push para agregar array. muta mi codigo 
    const onAddCategory = ( newCategory ) => {
        // categories.push(newCategory);
        if( categories.includes(newCategory) ) return; // si la categoria existe, no hace nada

        // Si no existe mi categoria, lo agregara 
        setCategories([ newCategory, ...categories]);        // 1er
        // setCategories( cat => [ ...cat, 'Valorant' ]);   // 2da
    }


    return (
        <>
            <h1>GifApp</h1>
            <hr/>


            <AddCategory 
                // setCategories={ setCategories }
                onCategory={ (event) => onAddCategory(event) } // empieza con 'on' es un evento
            />
            
            {
                categories.map( ( category ) => (
                    <GifCard 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}