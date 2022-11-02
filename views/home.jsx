const React = require('react')
const Default = require('./default')

function Home(data){
console.log(data.fishes)
let fishList = data.fish.map((fish) =>{

    
    return(
        <div>
            <h3><a href={`/fish/${fish.id}`}>Name: {fish.name}</a></h3>
            <h4>Location: {fish.geolocation}</h4>
            <h4>{fish.colors}</h4>
            <h4>{fish.favoriteBait}</h4>
            <img src={fish.image}/>  
            <br></br>
        </div>
    )
})





return(
    <Default>
        <main>
            <h1>The world of fish</h1>
            <div>
                {fishList}
            </div>
        </main>
    </Default>
)
}
module.exports = Home