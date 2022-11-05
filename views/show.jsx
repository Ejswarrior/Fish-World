const React = require('react')
const Default = require('./default')


function Show(data){

    let commens = data.fish.comment.map(c => {
        return (
            <p>{c.comment}</p>
        )
    })
    return(
        <Default>
            <div>
                <h3>Name: {data.fish.name}</h3>
                <h5>Geolocation: {data.fish.geolocation}</h5>
                <h5>Favorite Bait: {data.fish.favBait}</h5>
                <h5>Colors: {data.fish.colors}</h5>
                <img src={data.fish.image}/> 

                <div>{commens}</div>
                

                <form action={`/fish/${data.fish.id}`} method='POST'>
                <label htmlFor='comment'>Add a comment</label>
                <input id='comment' name='comment'/>
                <input type='submit' value='Submit'/>
                </form>
            </div>
        </Default>
    )
        
    }


module.exports = Show