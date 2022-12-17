import { useEffect } from "react";
import { useState } from "react";

export function PokeApiHook() {
    const [pokemen, setPokemen] = useState([])
    useEffect(() => {
        async function getPokeApi() {
            const pokeApi = await fetch('https://pokeapi.co/api/v2/pokemon')
            const response = await pokeApi.json();
            setPokemen(response.results)
        }
        getPokeApi()
    }, []);
    return pokemen
}