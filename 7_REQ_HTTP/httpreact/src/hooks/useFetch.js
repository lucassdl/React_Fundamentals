import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5- refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

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
            const res = await fetch(url);
            const json = await res.json();

            setData(json);
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

    return { data, httpConfig };
}