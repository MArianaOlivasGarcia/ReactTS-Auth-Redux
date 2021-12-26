import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";



export const DashboardScreen = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div className="container mt-5">
            <button 
                onClick={ handleLogout }    
                className="btn btn-primary"
                >
                Cerrar sesión
            </button>
        </div>
    )
}
