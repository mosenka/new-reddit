import { useDispatch } from "react-redux";
import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { MeRequestAction, MeRequestActionError, MeRequestActionSuccess, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, meState } from "./me/reducer";

export type RootState = {
    commentContext: string;
    token: string;
    me:  meState 
}
const initalSatate = {
    commentContext: 'Привет test',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export type updateCommentAction = {
    type: typeof  UPDATE_COMMENT;
    text: string
}

export const updateComment: ActionCreator<updateCommentAction> = (text: string) => ({
    type: 'UPDATE_COMMENT',
    text, 
})


const SET_TOKEN = 'SET_TOKEN';

type setTokenAction = {
    type: typeof SET_TOKEN;
    text: string
}

export const setToken: ActionCreator<setTokenAction> = (text: string) => ({
    type: 'SET_TOKEN',
    text
})

type myAction = updateCommentAction | setTokenAction |  MeRequestAction | MeRequestActionSuccess | MeRequestActionError;



export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    const url = new URL(window.location.href);
    const reg: RegExpMatchArray | null = url.hash.match(/^(?:#access_token=)([a-zA_Z0-9_-]+)&/i);
    if(!reg) return;
   
    const [hash, str]: Array<string> = reg;
    dispatch(setToken(str));
}





export const rootReducer: Reducer<RootState, myAction>= (state = initalSatate, action) => { 
    switch (action.type) {
        case UPDATE_COMMENT:
            return { ... state, commentContext: action.text}
        case SET_TOKEN:
            return {... state, token: action.text}
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
    
        default:
            return state
    }
}