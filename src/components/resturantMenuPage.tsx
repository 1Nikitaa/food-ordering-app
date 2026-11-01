import {getResturantPage} from '../api/resturantApi.js'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
export default function(){
    let [pageData, setPageData] = useState({});
    let {resId}=  useParams();
    useEffect(()=>{
       callapi(resId);
    },[])
     async function callapi(id){
        let data = await getResturantPage(id)
        setPageData(data);
        console.log(data)
     }
    return(
        <>
        <div>{pageData.name}</div>
        <div>{pageData.rank}</div>
 
        </>
    )
}
    