

async function fetchPokemonList(size=10, offset=0) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${size}&offset=${offset}`
    const response = await fetch(url)
    const pokeData = await response.json()
    return pokeData.results
}

async function fetchPokemonImgUrl(id=2) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.sprites.front_default
}

async function fetchPokemonImgUrlFromUrl(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data.sprites.front_default
}

export { fetchPokemonList, fetchPokemonImgUrl, fetchPokemonImgUrlFromUrl }

