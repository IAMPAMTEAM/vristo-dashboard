import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { IRootState } from '@/store';

interface Props {
    series: number[];
    labels: string[];
}

const PolarAreaChart = (props: Props) => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);

    const [chartData, setChartData] = useState({
        series: props.series,
        options: {
            chart: {
                width: 380,
                type: 'polarArea',
            },
            labels: props.labels,
            fill: {
                opacity: 1,
                colors: ['#FFD700', '#FFA500', '#FF6347'],
            },
            stroke: {
                width: 1,
                colors: '#FEFDED',
            },
            yaxis: {
                show: false,
            },
            legend: {
                position: 'bottom',
                markers: {
                    fillColors: ['#FFD700', '#FFA500', '#FF6347'],
                },
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0,
                    },
                    spokes: {
                        strokeWidth: 0,
                    },
                },
            },
            theme: {
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6,
                },
            },
            tooltip: {
                color: ['#FFD700', '#FFA500', '#FF6347'],
            },
        },
    });

    return (
        <div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
        </div>
    );
};

export default PolarAreaChart;
