import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5- refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6- loading
    const [loading, setLoading] = useState(false);

    // 7- tratando erros
    const [error, setError] = useState(null);

    const httpConfig = (data, config) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            // 6- loading
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados.");
            }

            setLoading(false);
        };

        fetchData();
    }, [url]);

    useEffect(() => {
        const httprequest = async () => {
            if (method === "POST") {
                let fetchOption = [url, config];
                const res = await fetch(...fetchOption);
                const json = await res.json();

                setCallFetch(json);
            }
        };

        httprequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
}