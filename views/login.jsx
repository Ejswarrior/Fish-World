const React = require('react')
const Default = require('./default')
const session = require('express-session')

function Login(data){
    return(
        <Default>
            <div>
                <h2>Enter in your Login information</h2>
                <form action='login/check' method="POST">
                    <label htmlFor='username' id='username'>Username</label>
                    <input type="text" name='username' id="password"/>
                    <label htmlFor='password' id='password'>Password</label>
                    <input type="password" name='password' id="password"/>
                    <input type='submit' value="Log in"></input>
                </form>
                {data.messages && <p style={{color:'red'}}>{data.messages}</p>}       
                
            </div>
        </Default>
    )

}

module.exports = Login