// peticion http: NOTA=> nuca poner funciones dentro de funcional-component, se renderiza cada que apriete o llamo al componente, genreando mas peticiones y mas carga en navegador.
export const peticionGifts = async( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=Wo767WBF4BxphmLUqgrcLw0agdRF4kXR&q=${ category }&limit=10` ;
    const resp = await fetch( url);
    //la data, trae mis imgs
    const { data = [] } = await resp.json()

    const gift = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }));

    // console.log(gift);
    return gift;
}