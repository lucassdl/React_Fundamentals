import {useState} from 'react';

import './MyForm.css'

const MyForm = ({user}) => {
    //6- controlled inputs


    //3- gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);

        //7- limpar formulário
        setName("");
        setEmail("");
        setBio("");
    }

    // console.log(name);
    // console.log(email);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* 1- criação de form */}
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            {/* 2- label envolvendo input  */}
            <label>
                <span>E-mail</span>
                {/* 4- Simplificação de manipulação de state */}
                <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* 8- textarea */}
            <label >
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="admin">Administrador</option>
                    <option value="editor">Editor</option>
                    <option value="user">Usuário</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm