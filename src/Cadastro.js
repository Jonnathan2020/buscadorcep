import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";




function Cadastrar(){
    const [input, setInput] = useState(' ');
    const [nomeUsuario, setNomeUsuario] = useState({})
    const [senhaUsuario, setSenha] = useState({})

    const handleSubmit = (event) => {
        //Impede que a pagina seja recarregada
        event.preventDefault();

        // Faz o console log das credenciais do usuario
        console.log("Dados de Registro:", {nomeUsuario, senhaUsuario});
    };

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Registre aqui seu nome de usuário e senha</h1>

                <div className="input-field">
                    <input  type="text" placeholder="Nome de Usuário" required value={nomeUsuario}
                        onChange={(f) => setNomeUsuario(f.target.value)}
                    />
                    <FaUser className='icon'/>        
                </div>

                <div className="input-field">
                    <input  type='text' placeholder='Digite a Senha' required value={senhaUsuario}
                        onChange={(f) => setSenha(f.target.value)}
                    />
                    <FaUnlockAlt className='icon'/>
                </div>

                <button type='submit'>Enviar</button>
            </form>

            <main>
                <h2>Seu Cadastro</h2>
                <span>Seu nome Usuario{nomeUsuario}</span>
                <span>Sua senha é {senhaUsuario}</span>
            </main>

        </div>
    )

}