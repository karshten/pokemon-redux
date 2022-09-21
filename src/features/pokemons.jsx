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
        const res = await Promise.all(results.map(async (item) => {
            const itemResponse = await fetch(item.url)
            const data = await itemResponse.json()
            return data
        }))
        dispatch(setPokemons(res))
    }
)

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemonsList = action.payload
        },
        sortByAttack: (state, action) => {
            state.pokemonsList = [...state.pokemonsList].sort((a, b) =>
                b.stats.find(item => item.stat.name === 'attack').base_stat
                - a.stats.find(item => item.stat.name === 'attack').base_stat
            )
        },
        sortByAlphabet: (state, action) => {
            state.pokemonsList = [...state.pokemonsList].sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }
    },
    extraReducers: {
        [getPokemons.fulfilled]: () => console.log('get pokeomons: fullfield'),
        [getPokemons.pending]: () => console.log('get pokeomons: pending'),
        [getPokemons.rejected]: () => console.log('get pokeomons :rejected')
    }
})

export const { setPokemons, sortByAttack, sortByAlphabet } = pokemonsSlice.actions
export default pokemonsSlice.reducer