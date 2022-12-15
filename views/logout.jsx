const React = require('react')
const Default = require('./default')

function logout(){
    return(
        <Default>
            <main>
                <form action='logout/check' method='POST'>
                    <input type="submit" value='Logout' />
                </form>
            </main>
        </Default>
    )
}

module.exports = logout