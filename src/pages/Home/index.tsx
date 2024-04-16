import React from "react";
import ButtonHome from "../../components/Button";
import "../Home/index.css"

const Home: React.FC = () => {
    return <main>
           <div className="div-home-global">
                <div className="div-home-1">
                    <h1>Bem-vindo(a) a plataforma que vai mudar o futuro!</h1>
                    <p>Crie e gerencie todas as suas iniciativas ESG.</p>
                    <ButtonHome />
                </div>
                <div className="div-home-2"></div>
            </div>
    </main>
}

export default Home;