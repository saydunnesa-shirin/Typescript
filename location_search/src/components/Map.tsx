import 'leaflet/dist/leaflet.css';
import type { Place } from "../api/Place";
import type { Map as LeafletMap } from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';

interface MapProps {
  place: Place | null
}

const Map = ({place}: MapProps) => {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if(mapRef.current && place){
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer ref={mapRef}
    center={[40.7, -7]}
    zoom={12}
    scrollWheelZoom
    className='h-full'
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
      </TileLayer>
      {place && 
      <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  )
}

export default Map
