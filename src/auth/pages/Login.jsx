import { useNavigate } from "react-router-dom"

export const Login = () => {

  let navigate = useNavigate();

  const onLogin = () => {
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
