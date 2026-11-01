
import {headerData} from './foodData.jsx';
import {Link} from 'react-router-dom'
function Header (){
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
      </div>
        </>
      )

 }
 export default Header;
