import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pokemon: null,
}

const url = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = createAsyncThunk(
    'pokemon/getPokemon',
    async (payload, { rejectWithValue, dispatch }) => {

        const response = await fetch(`${url}/${payload}`)
        const data = await response.json()

        const abilitiesUrl = data.abilities.map(item => {
            return { url: item.ability.url, name: item.ability.name }
        })

        dispatch(setPokemon(data))
        dispatch(getPokemonsDescription(data.species.url))
        dispatch(getPokemonAbilities(abilitiesUrl))
    }
)

export const getPokemonsDescription = createAsyncThunk(
    'pokemon/getPokemonsDescription',
    async (payload, { rejectWithValue, dispatch }) => {

        const descriptionRes = await fetch(payload)
        const descriptionData = await descriptionRes.json()

        const output = Array
            .from(new Set(descriptionData.flavor_text_entries
                .map(item => item.language.name === 'en' ? item.flavor_text : '')))
            .join('')

        dispatch(setPokemonProperty({ property: 'description', output: output }))
    }
)

export const getPokemonAbilities = createAsyncThunk(
    'pokemon/getPokemonAbylities',
    async (payload, { rejectWithValue, dispatch }) => {

        const output = await Promise.all(payload.map(async (item) => {
            const itemResponse = await fetch(item.url)
            const data = await itemResponse.json()
            const abilitiesDescription = data.effect_entries
                .filter(item => item.language.name === 'en')

            return {
                description: `${abilitiesDescription[0].effect}  ${abilitiesDescription[0].short_effect}`,
                name: item.name                
            }
        }))

        dispatch(setPokemonProperty({ property: 'Abilities', output: output }))
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload
        },
        setPokemonProperty: (state, action) => {
            state.pokemon[action.payload.property] = action.payload.output
        }
    },
    extraReducers: {
        [getPokemon.fulfilled]: () => console.log('get pokeomons: fullfield'),
        [getPokemon.pending]: () => console.log('get pokeomons: pending'),
        [getPokemon.rejected]: () => console.log('get pokeomons :rejected')
    }
})

export const { setPokemon, setPokemonProperty } = pokemonSlice.actions
export default pokemonSlice.reducer