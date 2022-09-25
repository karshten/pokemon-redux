import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extraReducers } from './extraReducers'

const initialState = {
    pokemonsList: [],
    isPending: false,
    error: null,
}

const url = 'https://pokeapi.co/api/v2/';
const { extraPending, extraResolved, extraRejected } = extraReducers()

export const getCollection = createAsyncThunk(
    'pokemons/getCollection',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await fetch(url + payload.endPoint)
            const data = await response.json()

            const results = [...data.results]
            const res = await Promise.all(results.map(async (item) => {
                const itemResponse = await fetch(item.url)
                const data = await itemResponse.json()
                return data
            }))
            return res

        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

export const getGeneration = createAsyncThunk(
    'pokemons/getGeneration',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await fetch(url + payload.endPoint)
            const data = await response.json()

            const results = [...data.pokemon_species].slice(0, 20)
            const res = await Promise.all(results.map(async (item) => {
                const itemResponse = await fetch(item.url.replace('-species', ''))
                const data = await itemResponse.json()
                return data
            }))
            return res
        } catch (err) {
            return rejectWithValue(err.message)
        }
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
        //get pokemons
        [getCollection.pending]: extraPending,
        [getCollection.fulfilled]: extraResolved,
        [getCollection.rejected]: extraRejected,

        // get generation 
        [getGeneration.pending]: extraPending,
        [getGeneration.fulfilled]:extraResolved,
        [getGeneration.rejected]: extraRejected
    }
})

export const { setPokemons, setGenerations, sortByAttack, sortByAlphabet } = pokemonsSlice.actions
export default pokemonsSlice.reducer