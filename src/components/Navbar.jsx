import { Link, NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {

    let navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> Heroes App</Link>
                    <div className="navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="marvel">Marvel</NavLink>
                            <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="dc">Dc</NavLink>
                            <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="search">Buscar</NavLink>

                        </div>
                    </div>

                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className="nav-item nav-link text-info">
                                Hugo
                            </span>

                            <button onClick={onLogout} className="nav-item nav-link btn" to="login">
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
