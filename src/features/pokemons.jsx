import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pokemonsList: [],
}
const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';

export const getPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async (payload, { rejectWithValue, dispatch }) => {
        const response = await fetch(url)
        const data = await response.json()

        const results = [...data.results]
        results.map(async (item) => {
            const res = await fetch(item.url)
            const data = await res.json()

            dispatch(setPokemons({ ...data }))
        })

    }
)

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemonsList =
                [
                    ...state.pokemonsList,
                    action.payload
                ]
        }
    },
    extraReducers: {
        [getPokemons.fulfilled]: () => console.log('get pokeomons: fullfield'),
        [getPokemons.pending]: () => console.log('get pokeomons: pending'),
        [getPokemons.rejected]: () => console.log('get pokeomons :rejected')
    }
})

export const { setPokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer