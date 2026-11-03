import {useState, useEffect} from 'react'
import {getResturantPage} from '../api/resturantApi'

export default function useResMenuData(id){
    let [pageData, setPageData] = useState({});
    useEffect(()=>{
       callapi(id);
    },[])
     async function callapi(id){
        let data = await getResturantPage(id);
        setPageData(data);
     }
     return pageData;
}
