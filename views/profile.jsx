const React = require('react')
const Default = require('./default')

function Profile(data){
    return(
        <Default>
            <main>
            <h1>Welcome to your profile {data.findUsers.name}</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi nemo dignissimos iusto repellat, placeat deserunt odit in commodi quae quidem nihil deleniti aliquid quis, eum fuga! Nostrum, quasi. Pariatur?</p>
            </main>
            {data.session ?
            <form>
                <input type="submit" Value="Edit"/>
                <input type="submit" Value="Settings"/>
            </form> : 
             console.log('fuck')}
        </Default>
        
    )
}

module.exports = Profile