import React from "react";

export default class LoginForm extends React.Component {
    render() {
        return(
            <div1 class="form-center">
            <form class="container" id="header">
                <h3>Login</h3>
                <input type="text" placeholder="Username"></input><br></br>
                <input type="text" placeholder="Password"></input><br></br>
                <button>Submit</button>
            </form>
            </div1>
        );
    }
}