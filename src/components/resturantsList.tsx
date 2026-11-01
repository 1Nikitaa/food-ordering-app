
import  ResturantCard  from './resturantCard'
import {useState,useEffect} from 'react'
import {getResList} from '../api/resturantApi.js'
import type {Resturant} from '../types/resturantobjects.ts'

function ResturantList() {
    const [resturantsList,setRestaurantsData] = useState<Resturant[]>([]);
    async function callDataApi(){
        let data = await getResList();
        setRestaurantsData(data.results)
    }

    useEffect(()=>{
        callDataApi();
    },[])


    return (
    <> <div className="res-list">{
        resturantsList.map((item)=>{
            return <ResturantCard restaurantData={item} key={item.id}/>
        })
        }
     </div>
    </>
    )
}

export default ResturantList;