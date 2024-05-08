import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface Props {
  data: number[][];
  title: string;
  colors: string[];
  categories: string[];
}

export const MultipleRadarChart = (props: Props) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'This Week',
        data: props.data[0],
      },
      {
        name: 'Last Week',
        data: props.data[1],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      colors: props.colors,
      title: {
        text: props.title,
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.2,
      },
      markers: {
        size: 0,
      },
      yaxis: {
        stepSize: 100,
      },
      xaxis: {
        categories: props.categories,
      },
    },
  });

  return (
    <div>
      <ReactApexChart options={{ ...chartData.options, chart: { ...chartData.options.chart, type: 'radar' } }} series={chartData.series} type='radar' height={450} />
    </div>
  );
};
