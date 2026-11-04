import UserContext from '../utils/userContext';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [username, setuserName] = useState('');
    const navigate = useNavigate();
    let { userLogindata, setUserLogindata } = useContext(UserContext);
    const handleLogin = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        setUserLogindata({
            ...userLogindata,
            isLoggedIn:true,
            userName:username,
        })
        navigate('/');
    }

    return (<>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor='username'>Enter your name</label>
            <input id="username" type="text" value={username} onChange={(e) => setuserName(e.target.value)}></input>
            <button type="submit">Login</button>
        </form>
    </>
    )
}
