import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarCliente from "../Componentes/NavbarCliente";
import Footer from "../Componentes/Footer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Set a user in local storage for testing
    useEffect(() => {
        const user = {
            email: "admin@gmail.com",
            password: "123456"
        };
        localStorage.setItem("user", JSON.stringify(user));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            if (storedUser.email === email && storedUser.password === password) {
                console.log("Login successful!");
                navigate("/admin-adolecencia"); // Redirect to the desired address
            } else {
                console.log("Invalid credentials");
            }
        } else {
            console.log("No user found. Please register.");
        }
    };

    return (
        <div>
            <NavbarCliente />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <form 
                    onSubmit={handleLogin} 
                    style={{ 
                        border: "1px solid #ccc", 
                        padding: "20px", 
                        borderRadius: "10px", 
                        maxWidth: "400px", 
                        width: "100%", 
                        backgroundColor: "#f9f9f9", 
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease"
                    }}
                >
                    <h2 style={{ textAlign: "center", marginBottom: "20px", fontFamily: "'Arial', sans-serif" }}>Iniciar Sesión</h2>
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontFamily: "'Arial', sans-serif" }}>
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                                fontFamily: "'Arial', sans-serif"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <label htmlFor="password" style={{ display: "block", marginBottom: "5px", fontFamily: "'Arial', sans-serif" }}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                                fontFamily: "'Arial', sans-serif"
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontFamily: "'Arial', sans-serif",
                            fontWeight: "bold"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
            <Footer />

        </div>
    );
};

export default Login;
