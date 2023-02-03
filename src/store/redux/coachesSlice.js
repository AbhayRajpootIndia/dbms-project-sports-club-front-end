import { createSlice } from "@reduxjs/toolkit";

const coachesSlice = createSlice({
    name: 'coaches',
    initialState: {
        coaches: []
    },
    reducers: {
        addCoach: (state, action) => {
            if (!state.coaches.includes(action.payload.newCoach)) {
                state.coaches.unshift(action.payload.newCoach);
            }
        },
        removeCoach: (state, action) => {
            if (state.coaches.includes(action.payload.newCoach)) {
                state.coaches.splice(state.coaches.indexOf(action.payload.newCoach), 1);
            }
        }
    }
});