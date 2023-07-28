const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    const renderSomeThing = (x) => {
        if(x){
            return <h1>Renderizando se verdadeiro!</h1>
        }else{
            return <h1>Renderizando se falso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria existir!");
                    }
                }}>Clique aqui, por favor.</button>
            </div>
            {renderSomeThing(true)}
            {renderSomeThing(false)}
        </div>        
    );
};

export default Events;