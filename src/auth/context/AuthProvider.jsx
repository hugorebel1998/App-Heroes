import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types';

// const initialState = {
//     logged: false,
// };

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user, // Si el usuario existe esto dara true
        user,
    }

}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {

        const user = { id: 'asdcv', name };

        const action = { type: types.login, payload: user };

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);

    }

    const logout = () => {

        const action = { type: types.logout, payload: null };

        localStorage.removeItem('user');

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ ...state, login: login, logout: logout }}>
            {children}
        </AuthContext.Provider>
    )
}
