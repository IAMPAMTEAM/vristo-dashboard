import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const VerticalBarChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Full Time',
                data: [440, 550],
            },
            {
                name: 'Part Time',
                data: [680, 850],
            },
            {
                name: 'Temporary',
                data: [350, 410],
            },
            {
                name: 'Intern',
                data: [350, 410],
            },
            {
                name: 'Contactor',
                data: [350, 401],
            },
            {
                name: 'Freelance',
                data: [135, 241],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '35%',
                    endingShape: 'rounded',
                },
            },
            colors: ['#FFA1F5', '#BC7AF9', '#4d5dc5', '#A6FF96', '#B5F1CC', '#FF8787'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Last Week', 'This Week'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)',
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                // y: {
                //     formatter: function (val) {
                //         return '$ ' + val + ' thousands';
                //     },
                // },
            },
        },
    });

    return (
        <div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" />
        </div>
    );
};
