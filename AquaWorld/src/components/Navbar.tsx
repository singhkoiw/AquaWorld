import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg,#0077b6,#00b4d8)",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>🌊 AquaWorld Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white" }}>
          Countries
        </a>
        <a href="#" style={{ color: "white" }}>
          Water Stations
        </a>
        <a href="#" style={{ color: "white" }}>
          Reports
        </a>
      </div>
    </nav>
  );
};

export default Navbar;