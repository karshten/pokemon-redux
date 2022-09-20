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
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload
        }
    },
    extraReducers: {
        [getPokemon.fulfilled]: () => console.log('get pokeomons: fullfield'),
        [getPokemon.pending]: () => console.log('get pokeomons: pending'),
        [getPokemon.rejected]: () => console.log('get pokeomons :rejected')
    }
})

export const { setPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer