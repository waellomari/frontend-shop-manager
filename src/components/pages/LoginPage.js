import './LoginPage.css'
import { useState, useContext } from "react";
import { NavLink } from 'react-router-dom'; 
import UserContext from "../../context/UsersContext";
import { useHistory } from 'react-router-dom';

function LoginPage (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const {loggedIn, logout} = useContext(UserContext);
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        setUsername(username);
        props.setLoggedIn(true);
        history.push("/products");
    };
/* 
    const handleLogin = (event) => {
        event.preventDefault();
        login(username, password);
    };
 */
    const handleLogout = () => {
        logout();
    };

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    return (
    <>
        
        <div className="wrapper fadeInDown mt-5">
            <div id="formContent">

                <h1 className='mt-4'>Login</h1>
                {loggedIn ?   <p onClick={handleLogout}>Log out</p> : <p>you are not logged In</p>}

                <form onSubmit={handleLogin}>
                    <input type="text" id="login" className="fadeIn first mt-2" name="login" required value={username} placeholder="login" onChange={handleUsernameInput}></input>
                    <input type="text" id="password" className="fadeIn second" name="login" placeholder="password"  required value={password} onChange={handlePasswordInput} ></input>
                    <input type="submit" className="fadeIn fourth" value="Log In" ></input>
                </form>

                <div id="formFooter">
                    <NavLink className="underlineHover" to='./register'> not registered ?</NavLink>
                    
                </div>

            </div>
        </div>

        </>
    )
};


export default LoginPage;