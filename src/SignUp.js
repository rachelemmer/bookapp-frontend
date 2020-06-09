import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
        username: '',
        password: ''
    }


    updateInput = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    signUp = event => {
        event.preventDefault()

        const {username, password} = this.state
        
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(alert("You have successfully signed up for Book Finder!"))   
            
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="signup-container">
                <p className="signup-question">Not a user? Sign Up!</p>
                <form className="signup-form" onSubmit={this.signUp}>
                    <input 
                        value={this.state.username} 
                        name="username" 
                        type="text" 
                        placeholder="username"
                        onChange={this.updateInput}
                    />
                    <input 
                        value={this.state.password} 
                        name="password" 
                        type="password" 
                        placeholder="password"
                        onChange={this.updateInput}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}
