// Definimos un objeto llamado 'types' que contiene los tipos de acciones para 
// la autenticación.
export const types = {
    // Este es el tipo de acción para cuando un usuario inicia sesión.
    login: '[Auth] Login',

    // Este es el tipo de acción para cuando un usuario cierra sesión.
    logout: '[Auth] Logout',
};

// Exportamos el objeto 'types' para que pueda ser utilizado en otras partes 
// de la aplicación.
// Esto ayuda a mantener consistencia al definir los tipos de acciones,
// y facilita el manejo de las mismas en un sistema de autenticación.
