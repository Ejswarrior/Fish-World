const React = require('react')
const Default = require('./default')
import {useEffect} from 'react'


function newfish(){

    return(
    <Default>
    <div id="newContainer" class="container">
    <h1>Log Your Catch</h1>
    <body>
        <form action="/fish" method="POST">
        <div class="col">
            <div class="row">
                <label class="form-label" htmlFor='name'>Name of fish</label>
                <input
                class="form-control-sm"
                name='name'
                id='name' />
            </div>

            <div class="row">
                <label class="form-label" htmlFor='geolocation'>Fishes Geolocation</label>
                <input
                class="form-control-sm"
                name='geolocation'
                id='geolocation' />
            </div>

            <div class="row">
                <label class="form-label" htmlFor='favBait'>Favorite Bait</label>
                <input
                class="form-control-sm"
                name='favBait'
                id='favBait' />
            </div>

            <div class="row">
                <label class="form-label" htmlFor='colors'>Colors</label>
                <input
                class="form-control-sm"
                name='colors'
                id='colors' />
            </div>

            <div class="row">
                <label class="form-label" htmlFor='image'>Image Url</label>
                <input type="url"
                class="form-control-sm"
                name='image'
                id='image' />
            </div>
            
            <div class="row">
                <input class="btn btn-primary" type="submit" value='Submit Fish'/>
            </div>
        </div>    
        </form>
    </body>
    </div>
    </Default>
    )
}

module.exports = newfish