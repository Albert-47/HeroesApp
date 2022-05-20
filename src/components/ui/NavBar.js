import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContext'; 
import { types } from '../../types/types';


const NavBar = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const handleLogOut = () => {

        localStorage.setItem( 'lastPath', location.pathname + location.search );

        const action = {
            type: types.logout
        }

        dispatch( action );

        navigate('/login', { replace: true });
    }

     const { user, dispatch } = useContext( AuthContext );
     console.log(user);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => ('nav-item nav-link' + (isActive ? ' active' : ''))} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className='nav-item nav-link text-info' >{ user.name }</span>
                    <button 
                        onClick={handleLogOut}
                        className="nav-item nav-link btn btn-primary" 
                        to="/login"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;