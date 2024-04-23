import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import IconCircleCheck from '../Icon/IconCircleCheck';

interface Props {
    series: number[];
    category: string;
    color: string;
    updatePoint: number;
}

const SingleFlowChart = (props: Props) => {
    const [chartData, setChartData] = useState({
        series: [
            {
                data: props.series,
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: [props.color],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    });

    return (
        <div>
            <div className="flex">
                <IconCircleCheck className="m-1 mr-2" />
                <div>
                    <p className="font-semibold text-lg">{props.category}</p>
                    <p className="font-thin opacity-50">category</p>
                </div>
            </div>
            <ReactApexChart options={{ ...chartData.options, chart: { ...chartData.options.chart, type: 'line' } }} series={chartData.series} type="line" height={45} />
            <div className="flex flex-row space-x-40 mt-5">
                <p className="font-semibold">$20,000</p>
                {props.updatePoint > 0 ? <p className="text-green-600">+{props.updatePoint}%</p> : <p className="text-red-500">{props.updatePoint}%</p>}
            </div>
        </div>
    );
};

export default SingleFlowChart;
