import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import IconCircleCheck from '../../Icon/IconCircleCheck';

interface Props {
    series: number[];
    categoryEn: string;
    category: string;
    color: string;
    updatePoint: number;
}

export const SingleFlowChart = (props: Props) => {
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
                    <p className="font-semibold text-lg">{props.categoryEn}</p>
                    <p className="font-thin">{props.category}</p>
                </div>
            </div>
            <ReactApexChart options={{ ...chartData.options, chart: { ...chartData.options.chart, type: 'line' } }} series={chartData.series} type="line" height={45} />
            <div className="mt-5">{props.updatePoint > 0 ? <p className="text-[#219C90]">+{props.updatePoint}%</p> : <p className="text-[#FF204E]">{props.updatePoint}%</p>}</div>
        </div>
    );
};
