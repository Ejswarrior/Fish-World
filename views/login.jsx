const React = require('react')
const Default = require('./default')
const session = require('express-session')

function Login(data){

    return(
        <Default>
            <div className='loginPage'>
                <h2 className='loginHeader'>Enter in your Login information</h2>
                <form action='login/check' method="POST"> 
                <span>
                    <label htmlFor='username' id='username'>Username</label>
                    <input type="text" name='username' id="password"/>
                </span>
                <span>
                    <label htmlFor='password' id='password'>Password</label>
                    <input type="password" name='password' id="password"/>
                    <input type='submit' value="Log in"></input>
                </span>
                </form>
                {data.messages && <p style={{color:'red'}}>{data.messages}</p>}       
                
            </div>
        </Default>
    )

}

module.exports = Login