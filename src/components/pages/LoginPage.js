import './LoginPage.css'
import { useState } from "react";

function LoginPage (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        console.log({ username, password });
        props.setLoggedIn(!props.loggedIn);
        event.preventDefault();
    };

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    return (
    <>
        
        <div class="wrapper fadeInDown mt-5">
            <div id="formContent">

                <h1 className='mt-4'>Login</h1>
                {props.loggedIn ? <p>Logged In</p> : <p>Not Logged In</p>}

                <form onSubmit={handleSubmit}>
                    <input type="text" id="login" class="fadeIn second mt-2" name="login" required value={username} placeholder="login" onChange={handleUsernameInput}></input>
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"  required value={password} onChange={handlePasswordInput} ></input>
                    <input type="submit" class="fadeIn fourth" value="Log In" ></input>
                </form>

                <div id="formFooter">
                <a class="underlineHover" href="#!">Forgot Password?</a>
                </div>

            </div>
        </div>

        </>
    )
};


export default LoginPage;