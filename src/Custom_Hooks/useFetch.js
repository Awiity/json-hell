import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) { throw Error('Could not fetch the data'); }
            return res.json();
        }
        )
        .then(data => {
            setData(data);
            setIsPending(false);
            //console.log(data);
        })
        .catch(e => {
            setError(error);
            console.log(e.message);
        })
        .finally(() => console.log("Tried to fetch"))}, [url]);

    return { data, error, isPending };
}
 
export default useFetch;