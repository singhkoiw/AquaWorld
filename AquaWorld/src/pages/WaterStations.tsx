import { useEffect, useState } from "react";

interface WaterStation {
  id: number;
  stationName: string;
  country: string;
  latitude: number;
  longitude: number;
  waterQuality: number;
}

const WaterStations = () => {
  const [stations, setStations] = useState<WaterStation[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    stationName: "",
    country: "",
    latitude: "",
    longitude: "",
    waterQuality: "",
  });

  useEffect(() => {
    const storedStations = localStorage.getItem("waterStations");

    if (storedStations) {
      setStations(JSON.parse(storedStations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "waterStations",
      JSON.stringify(stations)
    );
  }, [stations]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (editingId) {
      setStations(
        stations.map((station) =>
          station.id === editingId
            ? {
                ...station,
                stationName: formData.stationName,
                country: formData.country,
                latitude: Number(formData.latitude),
                longitude: Number(formData.longitude),
                waterQuality: Number(
                  formData.waterQuality
                ),
              }
            : station
        )
      );

      setEditingId(null);
    } else {
      const newStation: WaterStation = {
        id: Date.now(),
        stationName: formData.stationName,
        country: formData.country,
        latitude: Number(formData.latitude),
        longitude: Number(formData.longitude),
        waterQuality: Number(
          formData.waterQuality
        ),
      };

      setStations([...stations, newStation]);
    }

    setFormData({
      stationName: "",
      country: "",
      latitude: "",
      longitude: "",
      waterQuality: "",
    });
  };

  const handleEdit = (
    station: WaterStation
  ) => {
    setEditingId(station.id);

    setFormData({
      stationName: station.stationName,
      country: station.country,
      latitude: station.latitude.toString(),
      longitude: station.longitude.toString(),
      waterQuality:
        station.waterQuality.toString(),
    });
  };

  const handleDelete = (id: number) => {
    setStations(
      stations.filter(
        (station) => station.id !== id
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Water Monitoring Stations</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="stationName"
          placeholder="Station Name"
          value={formData.stationName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="latitude"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="longitude"
          placeholder="Longitude"
          value={formData.longitude}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="waterQuality"
          placeholder="Water Quality (%)"
          value={formData.waterQuality}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId
            ? "Update Station"
            : "Add Station"}
        </button>
      </form>

      <table
        border={1}
        cellPadding={10}
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Water Quality</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {stations.map((station) => (
            <tr key={station.id}>
              <td>{station.stationName}</td>
              <td>{station.country}</td>
              <td>{station.latitude}</td>
              <td>{station.longitude}</td>
              <td>
                {station.waterQuality}%
              </td>

              <td>
                <button
                  onClick={() =>
                    handleEdit(station)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(station.id)
                  }
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {stations.length === 0 && (
            <tr>
              <td
                colSpan={6}
                style={{
                  textAlign: "center",
                }}
              >
                No stations added
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WaterStations;