import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
         setLoading((prev) => !prev);
        axios
        .get(url)
        .then((response) => {
           setData(response.data)
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => setLoading(false))

    }, [url])

    const reFetch = () => {
         setLoading((prev) => !prev);
         axios
           .get(url)
           .then((response) => {
             setData(response.data);
           })
           .catch((err) => {
             setError(err);
           })
           .finally(() => setLoading(false));

    }
    return {data, loading, error, reFetch};
}

export default useFetch;