import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

function LoginPage(){

    function backToApp(){
        ReactDOM.render(<App/>,document.getElementById('root'));
    }

    return (<div>
    <h1> Hello from login Page</h1>
    <button onClick={backToApp}>APP</button>
    </div>);
}

export default LoginPage;