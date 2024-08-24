import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  // Obtenemos la función 'login' del contexto de autenticación
  const { login } = useContext(AuthContext);

  // useNavigate nos permite programáticamente redirigir a otras rutas
  const navigate = useNavigate();

  // Función que se ejecuta cuando el usuario hace clic en el botón de login
  const onLogin = () => {

    // Llamamos a la función 'login' con el nombre de usuario
    login('ChiPystola');
    
    // Navegamos a la ruta principal después de iniciar sesión, reemplazando la historia
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button 
        className="btn btn-warning"
        onClick={ onLogin }>
        Login
      </button>
    </div>
  )
}
