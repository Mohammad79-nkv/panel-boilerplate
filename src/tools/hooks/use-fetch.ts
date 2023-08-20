import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetch = (url: any) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then((response: any) => {
                setData(response.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [url])
    return {
        data,
        loading,
        error  
    }
}