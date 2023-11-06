import {createContext, useReducer} from 'react';

export const UserContext = createContext(null);

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
            };
        case 'SET_PETS':
            console.log("Setting pets");
            return {
                ...state,
                pets: action.payload,
            };
        default:
            return state;
    }
}
export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, { user: null});

    return (
        <UserContext.Provider value={{ ...state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}
