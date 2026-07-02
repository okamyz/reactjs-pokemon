import {useEffect, useState} from "react"
function Pokemon() {
    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(true)
    async function getAllPokemon() {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon";
        const resData = await fetch(apiUrl);
        const jsonData  = await resData.json();

        let pokemonDetail = []
        jsonData.results.map(async(item, index)=>{
            const resDataDetail = await fetch(item.url);
            const jsonDataDetail = await resDataDetail.json();  
            pokemonDetail[index] = jsonDataDetail
            setPokemonList([...pokemonDetail])
        })
    }

    useEffect(() => {
        getAllPokemon();
        setLoading(false)
    },[])

    // console.log(pokemonList);
    return (
        <div className='wrapper'>
            <div className="content">
                {
                    loading && (<div className='loading'>load all the pokemon...</div>)
                }
                <div className="grid">
                    {
                        pokemonList.map((item, index)=>{
                            return(
                                <div className='item' key={index}>
                                    <div className='image'><img src={item.sprites.front_default} alt="" /></div>
                                    <div className='title'>{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Pokemon