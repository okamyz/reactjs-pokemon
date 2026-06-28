import {useEffect, useState} from "react"
function Pokemon() {
    const [pokemonList, setPokemonList] = useState([])
    async function getAllPokemon() {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon";
        const resData = await fetch(apiUrl);
        const jsonData  = await resData.json();

        setPokemonList(jsonData.results);
    }

    useEffect(() => {
        getAllPokemon();
    },[])
    console.log(pokemonList);
    return (
        <div>Pokemon</div>
    )
}

export default Pokemon