const React = require('react')
const Default = require('./default')

function newfish(){
    return(
    <Default>
    <main>
    <h1>Add your fish</h1>
    <body>
        <form action="/fish" method="POST">

            <div>
            <label htmlFor='name'>Name of fish</label>
            <input
            name='name'
            id='name' />
            </div>
            <div>
            <label htmlFor='geolocation'>Fishes Geolocation</label>
            <input
            name='geolocation'
            id='geolocation' />
            </div>
            <div>
            <label htmlFor='favBait'>Favorite Bait</label>
            <input
            name='favBait'
            id='favBait' />
            </div>
            <div>
            <label htmlFor='colors'>Colors</label>
            <input
            name='colors'
            id='colors' />
            </div>
            <div>
            <label htmlFor='image'>Image Url</label>
            <input type="url"
            name='image'
            id='image' />
            </div>
            <input type="submit" value='Submit Fish'/>
            
        </form>
    </body>
    </main>
    </Default>
    )
}

module.exports = newfish