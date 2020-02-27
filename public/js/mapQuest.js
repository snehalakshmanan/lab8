function initMap() {
	// add your code here
	L.mapquest.key = '1TA0f2EC7zAgbEbiRcfYpo5OdpWg27Km';

    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    // L.mapquest.tileLayer('map') is the MapQuest map tile layer
    layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});
	
	//add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}