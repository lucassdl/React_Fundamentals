// componentes
import MyComponent from "./MyComponent";

// arquivo de estilo

const FirstComponent = () => {
    // essa função faz algo

    /*
    multi line
    */

    return(
        <div className ='teste'>
            {/*Algum comentário*/}
            <h1>Meu primeiro componente.</h1>
            <p>Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;