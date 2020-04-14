import React from 'react'

export default function LogIn() {
    return (
        <div>
             <form>
                <input name="username" type="text" placeholder="username"/>
                <input name="password" type="password" placeholder="password"/>
                <button type="submit">Log In</button>
            </form>
            <p className="signup-question">Not a user? Sign Up!</p>
            <form>
                <input name="username" type="text" placeholder="username"/>
                <input name="password" type="password" placeholder="password"/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
