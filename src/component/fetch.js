import {useState,useEffect} from 'react'
import axios from 'axios'
export function useFetch(url){
    const [State, setState] = useState("");
    const [Error, setError] = useState("");

    useEffect(() => {
        let mount = true;
        async function fetch(){
            try {
                const {data} = await axios.get(url);
                if (mount) {
                    setState(data);
                }
            } catch (error){
                if (mount){
                    setError("error")
                }
            }
        }

        fetch();
        return () => {
            mount=false
        }
    }, [url])
    const plapla={State,Error,fetch}
    return [plapla]
}