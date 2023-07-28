const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Dados do usúario</h2>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        {idade >= 18 ? (
            <div>
                <p>Usuário pode tirar a habilitação.</p>
            </div>
        ) : (
            <div>
                <p>Usuário não pode tirar a habilitação.</p>
            </div>
        ) }
    </div>
  )
}

export default UserDetails