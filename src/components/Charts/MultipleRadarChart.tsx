import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const MultipleRadarChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'This Week',
                data: [700, 620, 340, 520, 170, 324],
            },
            {
                name: 'Last Week',
                data: [710, 600, 310, 510, 410, 450],
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
            colors: ['#F27BBD', '#FFCBCB'],
            title: {
                text: 'Employee Type Compare - Radar Chart',
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
                categories: ['Full Time', 'Part Time', 'Temporary', 'Intern', 'Contractor', 'Freelance'],
            },
        },
    });

    return (
        <div>
            <ReactApexChart options={{ ...chartData.options, chart: { ...chartData.options.chart, type: 'radar' } }} series={chartData.series} type="radar" height={450} />
        </div>
    );
};
