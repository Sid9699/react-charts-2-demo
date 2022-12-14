import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Population of the U.S in different years",
    },
  },
};

interface ILineChartProps {
  chartData: { Year: string; Population: number }[];
  fill?: boolean;
}

const LineChart: FC<ILineChartProps> = ({ chartData, fill = false }) => {
  return (
    <Line
      options={options}
      data={{
        labels: chartData.map((year) => year.Year),
        datasets: [
          {
            label: "Population",
            data: chartData.map((year) => year.Population),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            fill: fill,
          },
        ],
      }}
    />
  );
};

export default LineChart;
