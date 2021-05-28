import React from 'react';

export class AuthorizationForm extends React.Component {
    constructor(props) {
        super(props);
    
        document.getElementById("root").style.justifyContent = "center";
        document.getElementById("root").style.alignItems = "center";
        document.getElementById("root").style.display = "flex";
    
        this.state = {login: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.kostil = "";
    }
    
    handleChange(event) {
        this.state[event.target.name] = event.target.value;
        this.setState(this.state);
    }
    
    handleSubmit(event) {
        const login = this.state.login;
        const password = this.state.password;

        console.log(this.kostil);

        if (this.kostil == "reg") {
            fetch("http://127.0.0.1:3012/registration", {
                method: "POST",
                origin: "http://127.0.0.1:3012/registration",
                body: JSON.stringify({login: login, password: password}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
        }

        else {
            fetch("http://127.0.0.1:3012/registration", {
                method: "POST",
                origin: "http://127.0.0.1:3012/registration",
                body: JSON.stringify({login: login, password: password}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
        }
    
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Логин: </label>
                <input type="text" name="login" value={this.state.value} onChange={this.handleChange} />
                <br />
                <label>Пароль: </label>
                <input type="text" name="password" value={this.state.value} onChange={this.handleChange} />
                <br />
                <input type="submit" name="authorization" value="Вход" onClick={() => {this.kostil = "auth"}} />
                <input type="submit" name="registration" value="Регистрация" onClick={() => {this.kostil = "reg"}} style={{margin: 10}} />
            </form>
        );
    }
}
