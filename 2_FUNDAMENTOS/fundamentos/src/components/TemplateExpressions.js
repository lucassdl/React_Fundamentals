const TemplateExpressions = () => {
    const name = "Lucas Lima";
    const data = {
        age: 39, 
        job: ".Net Developer"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você tem {data.age} anos e atua como {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpressions;