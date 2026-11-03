import {useEffect,useState} from 'react';
import {getResturantPage} from '../api/resturantApi'

export default function useResturantMenu (resId){
    let [menuData, setMenuData]=useState(null);
    useEffect(()=>{
        callapi();
     },[]);

      async function callapi(){
         let response = await getResturantPage(resId);
         setMenuData(response);
      }
 return menuData;
}