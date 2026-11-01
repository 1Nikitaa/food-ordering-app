import {useRouteError} from 'react-router-dom'

export default function (){
    const error = useRouteError();
    console.log(error,'error')
    return(<>
    <div className="error-page">
    <div>OOOOOPS!!!!!!NOT FOUND</div>

    <div>{error.data}</div>
    </div>
    
    </>)
}