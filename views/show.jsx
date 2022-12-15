const React = require('react')
const Default = require('./default')


function Show(data){

    let comment = data.fishFound.comment.map((c, index) => {
        return (
            <p>Comment {index}: {c.comment}</p>
        )
    })
    return(
        <Default>
            <div>
                <h3>Name: {data.fishFound.name}</h3>
                <h5>Geolocation: {data.fishFound.geolocation}</h5>
                <h5>Favorite Bait: {data.fishFound.favBait}</h5>
                <h5>Colors: {data.fishFound.colors}</h5>
                <img src={data.fishFound.image}/> 
                <h6>Posted by {data.fishFound.user}</h6>
                <h3>Comments</h3>
                <hl></hl>
                <div>{comment}</div>
                

                <form action={`/fish/${data.fishFound.id}`} method='POST'>
                <label htmlFor='comment'>Add a comment</label>
                <input id='comment' name='comment'/>
                <input type='submit' value='Submit'/>
                </form>
            </div>
        </Default>
    )
        
    }


module.exports = Show