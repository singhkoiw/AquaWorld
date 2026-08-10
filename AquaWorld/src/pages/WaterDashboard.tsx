import "./WaterDashboard.css";
const WaterDashboard = () => {
  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    flex: 1,
    minWidth: "220px",
  };

  return (
    <div
      style={{
        background: "#f5f9fc",
        minHeight: "100vh",
        padding: "25px",
      }}
    >
      <h1
        style={{
          color: "#0077b6",
          marginBottom: "20px",
        }}
      >
        🌍 Global Water Intelligence Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>🌎 Countries</h3>
          <h1>195</h1>
        </div>

        <div style={cardStyle}>
          <h3>💧 Water Stations</h3>
          <h1>256</h1>
        </div>

        <div style={cardStyle}>
          <h3>✅ Avg Water Quality</h3>
          <h1>84%</h1>
        </div>

        <div style={cardStyle}>
          <h3>⚠ High Risk Areas</h3>
          <h1>18</h1>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>📍 World Water Monitoring Map</h2>

        <div
          style={{
            height: "400px",
            background: "#caf0f8",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            color: "#0077b6",
          }}
        >
          React Leaflet Map Here
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>💦 Water Access Statistics</h3>

          <ul>
            <li>India - 94%</li>
            <li>USA - 99%</li>
            <li>Brazil - 91%</li>
            <li>Germany - 100%</li>
          </ul>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>🌧 Rainfall Insights</h3>

          <ul>
            <li>Asia - High</li>
            <li>Europe - Medium</li>
            <li>Africa - Low</li>
            <li>North America - Medium</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WaterDashboard;