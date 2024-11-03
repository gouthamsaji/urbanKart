import { useEffect, useState } from "react"




const useFetch = (url) => {

    const [data, setData] = useState()

    useEffect(()=>{

        fetch(url).then((response)=>{          //response of success data (in JSON format)
            response.json().then((result)=>{           //result in object format
                setData(result)
            })
        })
    },[])

    return data
}

export default useFetch