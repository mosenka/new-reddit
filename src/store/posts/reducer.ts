import { Reducer } from "react";
import { IPostItem, PostsRequestAction, PostsRequestActionError, PostsRequestActionSuccess, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./actions";



export type postsState = {
    data:  Array<IPostItem>,
	loading: boolean,
	errorLoading: string,
    nextAfter: string,
	// nextAfter: string

}

type postsActions = PostsRequestAction | PostsRequestActionSuccess | PostsRequestActionError;

export const postsReducer : Reducer<postsState, postsActions> = (state, action) => {
    switch (action.type) {
        case POSTS_REQUEST:
            return {...state, loading: true}
        case POSTS_REQUEST_ERROR:
            return {...state, errorLoading: action.errorLoading, loading: false}
        case POSTS_REQUEST_SUCCESS:
            return {...state, data: state.data.concat(...action.data), loading: false, nextAfter: action.nextAfter}
            // return {...state, data: action.data, loading: false}
    
        default:
            return state;
    }
}