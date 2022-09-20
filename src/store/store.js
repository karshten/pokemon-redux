import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../features/pokemons";
import pokemonSlice from "../features/pokemon";

export const store = configureStore({
    reducer: {
        pokemon: pokemonsSlice,
        pokemonDescription: pokemonSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    })
})