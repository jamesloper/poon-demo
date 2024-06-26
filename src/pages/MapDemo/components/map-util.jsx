export const boundsToPolygon = (bounds) => ({
	'type': 'Polygon',
	'coordinates': [[
		[bounds._sw.lng, bounds._sw.lat], // bottom left
		[bounds._sw.lng, bounds._ne.lat], // top left
		[bounds._ne.lng, bounds._ne.lat], // top right
		[bounds._ne.lng, bounds._sw.lat], // bottom right
		[bounds._sw.lng, bounds._sw.lat], // bottom left again
	]],
});

export const createPlaceMarker = (place, map) => {
	const el = document.createElement('div');
	el.className = 'place-marker';
	el.style.backgroundImage = `url(/categories/${getEmoji(place.properties.category)})`;
	return new mapboxgl.Marker(el).setLngLat(place.geometry.coordinates).addTo(map);
};

export const createUserLocationMarker = (location, map) => {
	const el = document.createElement('div');
	el.className = 'user-location-marker';
	return new mapboxgl.Marker(el).setLngLat(location.coordinates).addTo(map);
};

export const initPlacesSource = (map, features) => {
	map.addSource('dots', {
		'type': 'geojson',
		'data': {'type': 'FeatureCollection', 'features': features},
		'cluster': false,
	});
	map.addSource('features', {
		'type': 'geojson',
		'data': {'type': 'FeatureCollection', 'features': []},
		'cluster': false,
	});
	map.addLayer({
		'id': 'dots',
		'type': 'circle',
		'source': 'dots',
		'paint': {
			'circle-radius': 2.5,
			'circle-color': '#800',
			'circle-stroke-width': 1,
			'circle-stroke-color': '#f00',
		},
	});
	map.addLayer({
		'id': 'places',
		'type': 'symbol',
		'source': 'features',
		'layout': {
			'icon-image': ['get', 'avatar'],
			'icon-size': .5,
			'icon-offset': ['get', 'iconOffset'],
			'text-field': ['get', 'name'],
			'text-font': ['SF Compact Text Regular'],
			'text-offset': [0, 2.4],
			'text-size': 12,
			'icon-allow-overlap': true,
			'icon-ignore-placement': true,
			'text-allow-overlap': true,
			'text-ignore-placement': true,
			'text-optional': false,
		},
		'paint': {
			'text-color': '#fff',
			'text-halo-color': 'rgba(0, 0, 0, 1)',
			'text-halo-width': 2,
			'text-halo-blur': 0,
		},
	});
};