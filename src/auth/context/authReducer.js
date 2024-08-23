import { types } from "../types/types";

// Esta función, llamada 'authReducer', se encarga de manejar el estado de 
// autenticación del usuario.
// 'state' es el estado actual (es decir, la información actual sobre la 
// autenticación), 
// y 'action' es la acción que se quiere realizar (como iniciar o cerrar sesión).
export const authReducer = ( state = {} , action ) => {

    // Usamos un 'switch' para decidir qué hacer según el tipo de acción.
    switch ( action.type ) {

        // Si la acción es 'login' (iniciar sesión):
        case types.login:
            return {
                // Mantenemos el estado actual (...state) y actualizamos:
                ...state,
                // 'logged: true' indica que el usuario ahora está autenticado.
                logged: true,
                // 'user': action.payload' guarda el nombre del usuario.
                user: action.payload
            }

        // Si la acción es 'logout' (cerrar sesión):
        case types.logout:
            return {
                // 'logged: false' indica que el usuario ha cerrado sesión.
                logged: false,
            }
        
        // Si no es ninguna de las acciones anteriores, simplemente devolvemos 
        // el estado actual sin cambios.
        default:
            return state
    }
}
