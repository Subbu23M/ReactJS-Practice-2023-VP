import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"

// 1)Setup state
const initialState = {
    data: [],
    isLoading: false,
    erroMessage: null
}

// Create thunk
export const fetchPopulationByUrl = createAsyncThunk(
    'users/path',
    // API call
    async () => {
        try {
            const baseUrl = 'https://datausa.io/api/data?drilldowns=State&measures=Population'
            const response = await fetch(baseUrl)
            const data = await response.json()
            return data
        } catch (error) {
            alert(error.message)
        }
    }
)

// create slice
const populationSlice = createSlice({
    name: 'population',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopulationByUrl.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPopulationByUrl.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchPopulationByUrl.rejected, (state) => {
                state.isLoading = false
                state.erroMessage = 'network-issue'
            })
    }
})

export default populationSlice.reducer