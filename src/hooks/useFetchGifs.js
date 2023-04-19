import { useEffect, useState } from "react";
import { peticionGifts } from "../helpers/peticionGiftd";

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsloading ] = useState(true);


    const getImages = async() => {
        const newImage = await peticionGifts(category);
        setImages( newImage );
        setIsloading(false);
    }

    useEffect( () => {         // useEffect => efecto secundario, cuando haya un cambio de mi estado, quiro ejecutar un un efecto
        getImages();
    
    }, []);


    return  {
        images: images,
        isLoading: isLoading,
    };
}
