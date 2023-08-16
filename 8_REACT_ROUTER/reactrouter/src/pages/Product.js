import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
const Product = () => {
    // 4- Rota dinâmica
    const { id } = useParams();

    // 5- carregamento dado individual
    const url = "http://localhost:3000/products/" + id;

    const { data: product, loading, error } = useFetch(url);

    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    {/* 6- nested routes */}
                    <Link to={`/product/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
    );
}

export default Product