//Load Google Map and enable Autocomplete

function initialize() {
    initMap();
    initAutocomplete();
}
var map, marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 54.9783,
            lng: -1.6178
        },
        zoom: 13
    });
}


let autocomplete;

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'), {
            types: ['establishment'],
            componentRestrictions: { 'country': ['UK'] },
            fields: ['place_id', 'geometry', 'name']
        });
        
        autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder = 'Enter a place';
    } else {
        document.getElementById('details').innerHTML = place.name;
    }
}