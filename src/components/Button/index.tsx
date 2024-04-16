import React from "react";
import { Link } from "react-router-dom";

const ButtonHome = () => {
    return (
        <Link to="/tarefas" className="btn" style={{ backgroundColor: "#376A55", color: "#FFFFFF" }}>
            Comece agora!
        </Link>
    );
};

export default ButtonHome;