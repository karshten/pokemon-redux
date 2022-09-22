import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pokemonsList: []
}

const url = 'https://pokeapi.co/api/v2/';

export const getCollection = createAsyncThunk(
    'pokemons/getCollection',
    async (payload, { rejectWithValue, dispatch }) => {
        const response = await fetch(url + payload.endPoint)
        const data = await response.json()

        const results = [...data.results]
        const res = await Promise.all(results.map(async (item) => {
            const itemResponse = await fetch(item.url)
            const data = await itemResponse.json()
            return data
        }))
        dispatch(payload.reducer(res))
    }
)

export const getGeneration = createAsyncThunk(
    'pokemons/getGeneration',
    async (payload, { rejectWithValue, dispatch }) => {
        const response = await fetch(url + payload.endPoint)
        const data = await response.json()

        const results = [...data.pokemon_species].slice(0, 20)
        const res = await Promise.all(results.map(async (item) => {
            const itemResponse = await fetch(item.url.replace('-species', ''))
            const data = await itemResponse.json()
            return data
        }))
        dispatch(payload.reducer(res))
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
        [getCollection.fulfilled]: () => console.log('get pokeomons: fullfield'),
        [getCollection.pending]: () => console.log('get pokeomons: pending'),
        [getCollection.rejected]: () => console.log('get pokeomons :rejected')
    }
})

export const { setPokemons, setGenerations, sortByAttack, sortByAlphabet } = pokemonsSlice.actions
export default pokemonsSlice.reducer