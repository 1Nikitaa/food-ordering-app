
import {headerData} from './foodData.jsx';
import {Link} from 'react-router-dom'
import userContext from '../utils/userContext'
import {useContext} from 'react'
import {useSelector} from 'react-redux'

function Header (){
   let {userLogindata} = useContext(userContext)
   const cartItems = useSelector((store)=>store.cart.items)
   console.log(userLogindata,'userLogindata')
    return (
        <>
      <div className="header flex items-center p-1">
        <div className="header-left ">
          <img className= "header-image" src={headerData.header.imgSrc}>
          </img>
        </div>
        <div className="header-right">
        {
          headerData.links.map((item,index)=> {
            return( <Link key={`${item.linkName}-${index}`} to={item.url} className={`link-text ${item.class}`}>{item.linkName}</Link>)
          })
        }
        </div>
     
          <Link to="/login">
          <button className="button button-black button-white">
            {userLogindata.isLoggedIn ? <span>Logout</span>: <span>Login</span>}
          </button>
          </Link>

          <Link to="/cart">
            <button className="button button-black button-white bold">
              Cart {cartItems.length} Items
            </button>
          </Link>
         

        
      </div>
        </>
      )

 }
 export default Header;
