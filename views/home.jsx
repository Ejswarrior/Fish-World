const React = require('react')
const Default = require('./default')

function Home(data){
    
    let fishList = data.fishes.map((fish) =>{
    return(
       
        <div>
            <h3>Name: {fish.name}</h3>
            <h5>Geolocation: {fish.geolocation}</h5>
            <h5>Favorite Bait: {fish.favBait}</h5>
            <h5>Colors: {fish.colors}</h5>
            <img src={fish.image}/>
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