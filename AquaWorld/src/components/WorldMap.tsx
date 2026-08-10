import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center: [number, number] = [20, 77];

function WorldMap() {
  const mapProps: any = {
    center,
    zoom: 2,
    style: { height: "500px", width: "100%" },
  };

  return (
    <MapContainer {...mapProps}>
      <TileLayer
        {...({ attribution: "© OpenStreetMap contributors", url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" } as any)}
      />

      <Marker position={[28.6139, 77.209]}>
        <Popup>India Water Monitoring</Popup>
      </Marker>
    </MapContainer>
  );
}

export default WorldMap;
