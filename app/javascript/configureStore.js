import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const initialState = {
    greetings: [
        {
            name: "test",
            guid: "test"
        }
    ]
};

function rootReducer(state, action) {
    console.log(action.type)
    switch (action.type) {
        default:
            return state
    }
}

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}