import { Link , useNavigate } from "react-router-dom";
import "./Dashboard";
import { useAuth } from "../../../context/AuthContext";


export const Dashboard = () => {

    const { logout } = useAuth();

    return (

        <div className="dashboard">
            <header className="dashboard-header">
                <h2>Panel de administracion</h2>

            <div className="header-actions">

                <Link className="btn btn-secondary" to="/">
                    Volver a la tienda
                </Link>
                <button className="btn bg-delete primary" onClick={logout

                }>
                    Cerrar Sesion
                </button>

            </div>

            </header>

            <section className="dashboard-actions">
                <h3>Acciones rapidas </h3>

                <div className="actions-grid">
                    <Link to="/admin/products/new" className="action-card">
                       ➕ Cargar                
                    </Link>

                    <Link to="#" className="action-card-disabled">
                       ✏️ Modificar 
                    </Link>

                    <Link to="#" className="action-card disabled">
                        🗑️ Eliminar
                    </Link>

                </div>
            </section>

            <section className="dashboard-help">
                <h3>Ayuda</h3>
                <p>Desde aqui puedes hacer las alta , bajas y modificiaciones</p>

            </section>





        </div>


    )











}