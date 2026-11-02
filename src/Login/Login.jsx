import { useNavigate } from "react-router-dom";
import { useAuth } from  "../../context/AuthContext";
import "./Login.css"
import  { useState } from "react";


export const Login = () => {

    const { login } = useAuth;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({

        email : "",
        password : "",        
    });

    const handleChange = (e) =>{

        const {name, value} = e.target;
        setFormData ({
            ...formData, [name]: value
        });
       
    };

    const handleSubmit = async (e) =>{

            e.preventDefault();

            try{

                await login(formData.Data.e, formData.password);
                navigate("/admin", {replace: true});

            }catch(error){

                console.log(error);
                alert ("Error al iniciar sesion");
            }

        return (

            <form onSubmit={handleSubmit} className="login-form">

                <h2>Iniciar Sesion</h2>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    
                    />

                </div>

                <button className="btn bg-primary" type="submit">

                    Ingresar
                </button>


            </form>
        );
            
        
        };




}