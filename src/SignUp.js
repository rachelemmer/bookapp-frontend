import React, { Component } from 'react'

export default class LogIn extends Component {

    state = {
        newUsername: '',
        newPassword: ''
    }

    updateInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signUp = event => {
        event.preventDefault()
        
    }

    render() {
        return (
            <div className="signup-container">
                <p className="signup-question">Not a user? Sign Up!</p>
                <form className="signup-form">
                    <input 
                        value={this.state.newUsername} 
                        name="newUsername" 
                        type="text" 
                        placeholder="username"
                        onChange={this.updateInput}
                    />
                    <input 
                        value={this.state.newPassword} 
                        name="newPassword" 
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
