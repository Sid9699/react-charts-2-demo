import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

const App = () => {
  const [currentChart, setCurrentChart] = useState<string>("barChart");
  const [data, setData] = useState<{ Year: string; Population: number }[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const data = await response.json();
    setData(data.data.reverse());
  };

  return (
    <>
      <header className="p-4 bg-primary" />
      <div className="container">
        <div className="row mt-2">
          <select
            className="form-select"
            onChange={(e) => setCurrentChart(e.target.value)}
          >
            <option selected value="barChart">
              Bar Chart
            </option>
            <option value="lineChart">Line Chart</option>
            <option value="areaChart">Area Chart</option>
          </select>
        </div>
        {currentChart === "barChart" && <BarChart chartData={data} />}
        {currentChart === "lineChart" && <LineChart chartData={data} />}
        {currentChart === "areaChart" && <LineChart chartData={data} fill />}
      </div>
    </>
  );
};

export default App;
