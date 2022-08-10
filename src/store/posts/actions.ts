import axios from "axios";
import { ActionCreator } from "redux";


export const POSTS_REQUEST = 'POSTS_REQUEST';

export type PostsRequestAction = {
    type: typeof POSTS_REQUEST;
}

export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
    type: POSTS_REQUEST,
    
});

export interface IPostItem {
    data?: any;
    kind?: any;
}

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';

export type PostsRequestActionSuccess = {
    type: typeof POSTS_REQUEST_SUCCESS;
    data: Array<IPostItem>,
    nextAfter: string,
} 

export const postsRequestSuccess: ActionCreator<PostsRequestActionSuccess> = (data: Array<IPostItem>, nextAfter: string) => ({
    type: POSTS_REQUEST_SUCCESS,
    data,
    nextAfter
});

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export type PostsRequestActionError = {
    type: typeof  POSTS_REQUEST_ERROR;
    errorLoading: string,
}

export const postsRequestError: ActionCreator<PostsRequestActionError> = (errorLoading: string) => ({
    type: POSTS_REQUEST_ERROR,
    errorLoading
})