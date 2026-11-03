import {getResturantPage} from '../api/resturantApi.js'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import useResturantMenu from '../utils/useResturantMenu'

export default function(){
    let {resId}=  useParams();
    let data = useResturantMenu(resId);
    return(
        <>
        <div>{data?.name}</div>
        <div>{data?.rank}</div>
        </>
    )
}
    