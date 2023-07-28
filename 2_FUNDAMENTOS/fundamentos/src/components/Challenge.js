const Challenge = () =>{
    const a = 2016;
    const b = 1984;
    
    return(
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={() => console.log(a + b)}>Soma valores</button>
        </div>
    );
};

export default Challenge;