import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5- refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6- loading
    const [loading, setLoading] = useState(false);

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

            const res = await fetch(url);
            const json = await res.json();

            setData(json);

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

    return { data, httpConfig, loading };
}