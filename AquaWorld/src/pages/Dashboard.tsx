import { useEffect, useState } from "react";
import { getWaterAccessData } from "../services/waterApi";

function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getWaterAccessData();

      // World Bank response format:
      // result[0] = metadata
      // result[1] = actual data
      setData(result[1]);
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>Water Data</h1>

      {data.slice(0, 10).map((item: any) => (
        <div key={item.country.id}>
          {item.country.value} :
          {" "}
          {item.value}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;