const React = require('react')
const Default = require('./default')

function createAccount(data){
    return(
        <Default>
            <div>
                <h2>Enter in your Login information</h2>
                    <form action={`/user/profile`} method="POST">
                        <div>
                            <label htmlFor='name'>Fist Name</label>
                            <input type="text" name='name' id="name"/>
                        </div>

                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type="email" name='email' id="email"/>
                        </div>

                        <div>
                            <label htmlFor='username' id='username'>Username</label>
                            <input type="text" name='username' id="password"/>
                        </div>

                        <div>
                            <label htmlFor='password' id='password'>Password</label>
                            <input type="password" name='password' id="password"/>
                        </div>

                        <input type='submit' value="Submit"></input>
                    </form>
                    {data.messages && <p style={{color:'red'}}>{data.messages}</p>}  
            </div>
        </Default>
    )
}

module.exports = createAccount