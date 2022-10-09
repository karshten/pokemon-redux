export const extraReducers = () => {
    const extraPending = (state) => {
        state.isPending = true
        state.error = null
    }

    const extraResolved = (state, action) => {
        state.pokemonsList = action.payload
        state.isPending = false
        state.error = null
    }

    const extraRejected = (state, action) => {
        state.isPending = false
        state.error = action.payload
    }

    return { extraPending, extraResolved, extraRejected }
}