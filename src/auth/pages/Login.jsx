import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    login('Hugo Guillermo');
    
    navigate('/', {
      replace: true
    })
  }

  return (
    <>
      <div className="text-center h2 mt-4">Inicio sesión</div> <hr />

      <div className="text-center">
        <button onClick={onLogin} className="btn btn-primary">Inicio sesión</button>
      </div>

    </>
  )
}
