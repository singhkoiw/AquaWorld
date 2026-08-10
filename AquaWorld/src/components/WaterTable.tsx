import type { WaterData } from "../types/WaterData";

interface Props {
  waterData: WaterData[];
}

const WaterTable = ({ waterData }: Props) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Country</th>
          <th>Quality</th>
          <th>Population</th>
        </tr>
      </thead>

      <tbody>
        {waterData.map((item) => {
          const quality = (item as WaterData & { quality?: number }).quality ?? 0;

          return (
            <tr key={item.id}>
              <td>{item.country}</td>
              <td>{quality}%</td>
              <td>{item.population}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WaterTable;