import { Reducer } from "react";
import { IUserData, MeRequestAction, MeRequestActionError, MeRequestActionSuccess, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./actions";


export type meState = {
    loading: boolean;
    error: string;
    data: IUserData
}

type meActions = MeRequestAction | MeRequestActionSuccess | MeRequestActionError;

export const meReducer : Reducer<meState, meActions> = (state, action) => {
    switch(action.type) { 
        case ME_REQUEST: 
            return {...state, loading: true}
        
        case ME_REQUEST_ERROR: 
            return {...state, error: action.error, loading: false}
        case ME_REQUEST_SUCCESS: 
            return {...state, data: action.data, loading: false }
        
        default: 
            return state;
    }
}