import type { WaterData } from "../types/WaterData";


interface Props {
  data: WaterData;
}

const WaterCard = ({ data }: Props) => {
  return (
    <div>
      <h3>{data.country}</h3>
      <p>{data.waterQuality}</p>
    </div>
  );
};

export default WaterCard;
