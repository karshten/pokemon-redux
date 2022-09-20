import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../features/pokemons";

export const store = configureStore({
    reducer: {
        pokemon: pokemonsSlice
    }
})