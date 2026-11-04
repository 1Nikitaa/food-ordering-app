
import ResturantCard, { topRatedResCard } from './resturantCard'
import { useState, useEffect, useContext } from 'react'
import { getResList } from '../api/resturantApi.js'
import type { Resturant } from '../types/resturantobjects.ts'
import ButtonComponent from './buttonComponent'
import Searchbox from './searchButton'
import userContext from '../utils/userContext'

function ResturantList() {
    const [resturantsList, setRestaurantsData] = useState<Resturant[]>([]);
    const [filteredList, setFilteredList] = useState<Resturant[]>([]);
    const {userLogindata} = useContext(userContext);

    async function callDataApi() {
        let data = await getResList();
        setRestaurantsData(data.results)
        setFilteredList(data.results)
    }

    useEffect(() => {
        callDataApi();
    }, [])

    const filterTopRated = () => {
        const filterList = resturantsList.filter(item => item.rating_external?.value > 4)
        setFilteredList(filterList)
    }
    const showAllRes = () => {
        setFilteredList(resturantsList)
    }
    const searchTypeTextDebounced = ((value) => {
        let timer;
        return function (value) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                searchTypeText(value)
            }, 500)
        }
    })();

    const searchTypeText = (val) => {
        const searchedLIst = resturantsList.filter((item) => {
            return (item.name.toLowerCase().includes(val.toLowerCase())
                || item.cuisines.includes(val.toLowerCase()))
        })
        setFilteredList(searchedLIst)

    }
    const PolishedCard = topRatedResCard(ResturantCard);
    console.log(PolishedCard);


    return (
        <>
            <div className="button-group">
                <ButtonComponent text={"Top Rated"} onClick={filterTopRated} />
                <ButtonComponent text={"All Resturant"} onClick={showAllRes} />
                <Searchbox text="search resturants.. " searchItem={searchTypeTextDebounced}></Searchbox>
                {userLogindata.isLoggedIn? <span>Hey! there {userLogindata.userName}</span>:""}
            </div>
            {filteredList.length === 0 ? (<h1>No Result found...</h1> ): 
              <div className="res-list">{
                filteredList.map((item) => {
                    { return item.rating_external?.value > 4 ? (<PolishedCard restaurantData={item} resId={item.id} key={item.id} />) : (<ResturantCard restaurantData={item} resId={item.id} key={item.id} />) }
                })
            }
            </div>}


          
        </>
    )
}

export default ResturantList;