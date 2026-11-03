import {getResturantPage} from '../api/resturantApi.js'

import {useParams} from 'react-router-dom'
import useResMenuData from '../utils/useResMenuData'
export default function(){
   let {resId} = useParams();
   let pageData = useResMenuData(resId);
   
    return(
        <>
        <div>{pageData.name}</div>
        <div>{pageData.rank}</div>
        </>
    )
}
    