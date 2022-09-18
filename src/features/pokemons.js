import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pokemonsList: []
}

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemonsList = action.payload
        }
    }
})

export const { setPokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer