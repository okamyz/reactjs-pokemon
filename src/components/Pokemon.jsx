import {useEffect, useState} from "react"
function Pokemon() {
    const [pokemonList, setPokemonList] = useState([])
    async function getAllPokemon() {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon";
        const resData = await fetch(apiUrl);
        const jsonData  = await resData.json();

        let pokemonDetail = []
        jsonData.results.map(async(item, index)=>{
            const resDataDetail = await fetch(item.url);
            const jsonDataDetail = await resDataDetail.json();  
            pokemonDetail[index] = jsonDataDetail
            
        })
        // setPokemonList(jsonData.results);
        console.log(pokemonDetail);
    }

    useEffect(() => {
        getAllPokemon();
    },[])

    // console.log(pokemonList);
    return (
        <div className='wrapper'>
            <div className="content">
                <div className="grid">
                    {
                        pokemonList.map((item)=>{
                            return(
                                <div className='item'>
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