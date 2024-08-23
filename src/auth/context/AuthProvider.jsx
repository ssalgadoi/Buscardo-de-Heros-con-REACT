import { AuthContext } from "./AuthContex";
import { useReducer } from 'react'

import { authReducer } from './authReducer'
import { types } from "../types/types";

// Definimos el estado inicial, que indica que el usuario no está autenticado
// cuando entramos a la aplicacion no estamos registrados
// (logged: false).
const initialState = {
    logged: false,
}

// El 'AuthProvider' es como un contenedor que permite compartir la información
// sobre la autenticación del usuario con todos los componentes dentro de él.
export const AuthProvider = ({ children }) => {

    // Aquí usamos 'useReducer' para manejar el estado de autenticación.
    // 'authState' es la información actual sobre la autenticación.
    // 'dispatch' es la función que usamos para cambiar el estado (por ejemplo, 
    // para iniciar o cerrar sesión).
    const [ authState, dispatch ] = useReducer( authReducer, initialState);

    const login = ( name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                user: name
            }
        }

        dispatch(action)
    }

    return (
        // 'AuthContext.Provider' envuelve a todos los componentes hijos 
        //({ children }).
        // Proporcionamos el estado de autenticación (authState) y la función 
        // 'dispatch' para que
        // cualquier componente dentro de este contenedor pueda acceder a ellos.
        <AuthContext.Provider value={{ ...authState, login: login }}>
            { children }
        </AuthContext.Provider>
    )
}
