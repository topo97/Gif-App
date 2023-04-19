import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifCard = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className='card-grid'>
                {
                    images.map( (props) => (
                        <GifItem 
                            key={ props.id }
                            { ...props }    // traigo todas las propertis de los paquetes de informacion
                        />
                    ))
                }
        
            </div>
        </>
    )
}

// useEffect => efecto secundario, cuando haya un cambio de mi estado, quiro ejecutar un un efecto