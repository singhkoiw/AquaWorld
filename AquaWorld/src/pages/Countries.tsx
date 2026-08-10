import { useEffect, useState } from "react";
import { getAllCountries } from "../services/countryApi";
import type { Country } from "../types/country";

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Countries</h1>

      <input
        type="text"
        placeholder="Search Country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {countries
        .filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 20)
        .map((country) => (
          <div
            key={country.iso3}
            style={{
              border: "1px solid #ddd",
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img
              src={country.flag}
              alt={country.name}
              style={{
                width: "80px",
                height: "50px",
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
            />

            <div>
              <h3>{country.name}</h3>
              <p>
                <strong>ISO2:</strong> {country.iso2}
              </p>
              <p>
                <strong>ISO3:</strong> {country.iso3}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Countries;