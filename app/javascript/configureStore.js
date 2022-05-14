import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const initialState = {
    greetings: {
        name: "CIAO MONDO",
        id: 0
    }
};

function rootReducer(state, action) {
    switch (action.type) {
        case "GET_GREETINGS_SUCCESS":
            console.log(action.json)
            return { 
                greetings: action.json
             };
    }
    return state;
}

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}