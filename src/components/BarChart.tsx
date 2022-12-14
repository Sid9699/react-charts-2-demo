import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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

interface IBarChartProps {
  chartData: { Year: string; Population: number }[];
}

const BarChart: FC<IBarChartProps> = ({ chartData }) => {
  return (
    <Bar
      options={options}
      data={{
        labels: chartData.map((year) => year.Year),
        datasets: [
          {
            label: "Population",
            data: chartData.map((year) => year.Population),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }}
    />
  );
};

export default BarChart;
