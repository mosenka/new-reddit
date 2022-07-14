import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    commentContext: string;
    token: string;
}
const initalSatate = {
    commentContext: 'Привет test',
    token: ''
}
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: 'UPDATE_COMMENT',
    text, 
})
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const setToken: ActionCreator<AnyAction> = (text) => ({
    type: 'SET_TOKEN',
    text
})

const SET_TOKEN = 'SET_TOKEN';

export const rootReducer: Reducer<RootState>= (state = initalSatate, action) => { 
    switch (action.type) {
        case UPDATE_COMMENT:
            return { ... state, commentContext: action.text}
        case SET_TOKEN:
            return {... state, token: action.text}
    
        default:
            return state
    }
}