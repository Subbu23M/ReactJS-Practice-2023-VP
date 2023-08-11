import counterSlice from "./features/counterSlice";
import populationSlice from "./features/populationSlice";

export const rootReducer = {
    counter:counterSlice,
    population:populationSlice
}