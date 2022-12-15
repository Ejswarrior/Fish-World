const React = require('react')
const Default = require('./default')

function Home(data){
let fishList = data.fish.map((fish) =>{

    
    return(
        <div class="col">
            <div class="row">
                <img class="img-fluid w-50 h-50" src={fish.image}/>
            </div>
            <div class="row">
                <h3><a href={`/fish/${fish.id}`}></a>{fish.user} caught a: {fish.name}</h3>
                <h4>Location Caught: {fish.geolocation}</h4>
                <h4>{fish.favoriteBait}</h4>
                <br></br>
            </div>
        </div>
    )
})

// async function refresh(){
//     let response = await fetch('localhost:3001/fishrefresh')
//     let result = await response.json()
//     console.log(result)
// }




return(
    <Default>
        <div class="container justify-content:center">
            <h1>The world of fish</h1>
            <a href={"/user/login"}><button class="btn btn-secondary">Login</button></a>
            <button class="btn btn-secondary">Home</button>
                {fishList}
        </div>
    </Default>
)
}
module.exports = Home