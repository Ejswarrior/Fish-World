const React = require('react')
const Default = require('./default')

function Profile(data){
    let posts = data.findUsers.posts.map((fish) => {
        return(
            <div>
            <h3><a href={`/fish/${fish.id}`}>Name: {fish.name}</a></h3>
            <h4>Location: {fish.geolocation}</h4>
            <h4>{fish.colors}</h4>
            <h4>{fish.favoriteBait}</h4>
            <img src={fish.image}/>  
            <hr></hr>
            </div>
        )
    })

    return(
        <Default>
            <main>
            <h1>Welcome to your profile {data.findUsers.name}</h1>
            <a href={'/fish'}><button href="/fish">Home</button></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi nemo dignissimos iusto repellat, placeat deserunt odit in commodi quae quidem nihil deleniti aliquid quis, eum fuga! Nostrum, quasi. Pariatur?</p>

            {posts}
            </main>
        </Default>
        
    )
}

module.exports = Profile