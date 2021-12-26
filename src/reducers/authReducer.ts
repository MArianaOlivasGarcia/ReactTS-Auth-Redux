import { types } from "../types/types";


const initialState = {
    user: null,
    isCheking: true,
    isLogged: false,
}


interface Action {
    type: string
    payload?: Object
}

export const authReducer = ( state = initialState, action: Action ) => {

    switch ( action.type ) {
        case types.register:    
            return {
                ...state,
                isCheking: false,
                isLogged: true,
                user: action.payload
            };
        
        case types.login:    
            return {
                ...state,
                isCheking: false,
                isLogged: true,
                user: action.payload
            };

        case types.chekingFinish:    
            return {
                ...state,
                isCheking: false,
                isLogged: false
            };
    
        case types.logout:    
            return {
                isCheking: false,
                isLogged: false
            };
    
    
    
        default:
            return state;
    }

}