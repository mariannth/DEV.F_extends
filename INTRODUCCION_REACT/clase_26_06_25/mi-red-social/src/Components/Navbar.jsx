import { Link } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";

const Navbar = ({ user, logout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/">MiTwitter</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    {user && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Perfil</Link>
                        </li>
                    )}
                </ul>
                <div className="d-flex">
                    {user ? (
                        <>
                            <span className="navbar-text text-white me-3">Hola, @{user.username}</span>
                            <button onClick={logout} className="btn btn-outline-light btn-sm">Cerrar sesión</button>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-outline-light btn-sm">Iniciar sesión</Link>
                    )}
                </div>
                <div className="d-flex align-items-center">
                    <ThemeToggle />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
