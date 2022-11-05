const React = require('react')
const Default = require('./default')

function Login(){
    return(
        <Default>
            <div>
                <h2>Enter in your Login information</h2>
                <form action='/user' method="POST">
                    <label htmlFor='username' id='username'>Username</label>
                    <input type="text" name='username' id="password"/>
                    <label htmlFor='password' id='password'>Password</label>
                    <input type="password" name='password' id="password"/>
                    <input type='submit' value="Submit"></input>
                </form>
            </div>
        </Default>
    )

}

module.exports = Login