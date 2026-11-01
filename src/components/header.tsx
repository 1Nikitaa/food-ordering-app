
import {headerData} from './foodData.jsx';
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
            const Element = item.type === 'link' ? "a" : "button";
            return( <Element key={`${item.linkName}-${index}`} href={item.url} className={`link-text ${item.class}`}>{item.linkName}</Element>)
          })
        }
        </div>
      </div>
        </>
      )

 }
 export default Header;
