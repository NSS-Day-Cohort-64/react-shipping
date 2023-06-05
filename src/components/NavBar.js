import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/docks">Docks</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/haulers">Haulers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/shippers">Shipping Ships</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/assignments">Assignments</Link>
            </li>
            {
                localStorage.getItem("honey_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("honey_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
