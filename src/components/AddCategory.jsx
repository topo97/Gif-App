import { useState } from "react"


export const AddCategory = ({ onCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;  // no crear campos vacios
        
        // Inasertar elementos 
        // setCategories((categories) => [ inputValue, ...categories ]);
        onCategory( inputValue.trim() );
        setInputValue('');   // limpieza en input text
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
