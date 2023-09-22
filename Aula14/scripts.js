let formName = document.querySelector('.form-name');
let listNames = document.querySelector('tbody');
let imputName = document.querySelector('.form-control');

formName.addEventListener('submit', async function (e) {
    e.preventDefault();

    let pokemonName = imputName.value.toLowerCase();
    
    try {
        let pokemonData = await getPokemonData(pokemonName);
        
        // Limpa a lista anterior
        listNames.innerHTML = '';
        
        // Adiciona os dados do Pokémon à tabela
        listNames.innerHTML += `
    <tr>
        <td>${pokemonData.name}</td>
        <td>${pokemonData.height}</td>
        <td>${pokemonData.types[0].type.name}</td>
        <td>${pokemonData.abilities[0].ability.name}</td>
        <td>${formatEvolutionChain(pokemonData.evolutionChain)}</td>
        <td><img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}"></td>
    </tr>
  
`;

// Função para formatar as informações de evolução
function formatEvolutionChain(evolutionChain) {
    let chain = [];
    let currentEvolution = evolutionChain;
    
    while (currentEvolution) {
        chain.push(currentEvolution.species.name);
        currentEvolution = currentEvolution.evolves_to[0];
    }
    
    return chain.join(' -> ');
}
    } catch (error) {
        console.error(error);
        listNames.innerHTML = '<tr><td colspan="5">Erro ao buscar informações do Pokémon.</td></tr>';
    }
});

async function getPokemonData(name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
    if (!response.ok) {
        throw new Error(`Erro ao buscar informações do Pokémon: ${response.statusText}`);
    }
    
    let data = await response.json();
    
    // Busca informações de evolução
    let evolutionChain = await getPokemonEvolutionChain(name);
    
    return {
        name: data.name,
        height: data.height,
        types: data.types,
        abilities: data.abilities,
        sprites: data.sprites,
        evolutionChain: evolutionChain, 
    };
}


async function getPokemonEvolutionChain(name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
    
    if (!response.ok) {
        throw new Error(`Erro ao buscar informações de evolução do Pokémon: ${response.statusText}`);
    }
    
    let data = await response.json();
    let evolutionChainUrl = data.evolution_chain.url;
    
    let evolutionResponse = await fetch(evolutionChainUrl);
    if (!evolutionResponse.ok) {
        throw new Error(`Erro ao buscar informações de evolução do Pokémon: ${evolutionResponse.statusText}`);
    }
    
    let evolutionData = await evolutionResponse.json();
    return evolutionData.chain;
}

