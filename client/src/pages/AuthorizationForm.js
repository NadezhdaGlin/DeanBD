import React from 'react';

export default class AuthorizationForm extends React.Component {
    constructor(props) {
        super(props);

        document.getElementById("root").style.justifyContent = "center";
        document.getElementById("root").style.alignItems = "center";
        document.getElementById("root").style.display = "flex";

        this.state = {login: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.state[event.target.name] = event.target.value;
        this.setState(this.state);
    }

    handleSubmit(event) {
        const login = this.state.login;
        const password = this.state.password;

        // ...

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
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
