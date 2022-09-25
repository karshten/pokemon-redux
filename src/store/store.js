import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../features/Pokemons/pokemons";
import pokemonSlice from "../features/Pokemon/pokemon";
import sideBarSlice from "../features/sideBar";

export const store = configureStore({
    reducer: {
        pokemon: pokemonsSlice,
        pokemonDescription: pokemonSlice,
        showSideBar: sideBarSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    })
})