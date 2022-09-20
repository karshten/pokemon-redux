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

        dispatch(setPokemon(data))
        dispatch(getPokemonsDescription(data.species.url))
    }
)

export const getPokemonsDescription = createAsyncThunk(
    'pokemon/getPokemonsDescription',
    async (payload, { rejectWithValue, dispatch }) => {

        const descriptionRes = await fetch(payload)
        const descriptionData = await descriptionRes.json()

        const output = Array.from(new Set(descriptionData.flavor_text_entries.map(item => item.flavor_text))).join('')

        dispatch(setPokemonDescription(output))
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload
        },
        setPokemonDescription: (state, action) => {
            state.pokemon.description = action.payload
        }
    },
    extraReducers: {
        [getPokemon.fulfilled]: () => console.log('get pokeomons: fullfield'),
        [getPokemon.pending]: () => console.log('get pokeomons: pending'),
        [getPokemon.rejected]: () => console.log('get pokeomons :rejected')
    }
})

export const { setPokemon, setPokemonDescription } = pokemonSlice.actions
export default pokemonSlice.reducer