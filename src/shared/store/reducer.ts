import { useDispatch } from "react-redux";
import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { MeRequestAction, MeRequestActionError, MeRequestActionSuccess, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, meState } from "./me/reducer";
import { PostsRequestAction, PostsRequestActionError, PostsRequestActionSuccess, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./posts/actions";
import { postsReducer, postsState } from "./posts/reducer";

export type RootState = {
    commentContext: string;
    token: string;
    me:  meState;
    posts: postsState; 
}
const initalSatate = {
    commentContext: 'Привет test',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
    posts: {
        data: [],
        loading: false,
        errorLoading: '',
        nextAfter: '',
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

type myAction = updateCommentAction | setTokenAction |  MeRequestAction | MeRequestActionSuccess | MeRequestActionError | PostsRequestAction | PostsRequestActionSuccess | PostsRequestActionError;



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
        case POSTS_REQUEST:
        case POSTS_REQUEST_SUCCESS:
        case POSTS_REQUEST_ERROR:
            return {
                ...state,
                posts: postsReducer(state.posts, action)
            }
    
        default:
            return state
    }
}