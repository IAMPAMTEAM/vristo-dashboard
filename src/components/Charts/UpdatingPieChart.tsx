import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const UpdatingPieChart = () => {
    const thisWeekData: number[] = [700, 620, 340, 520, 170, 324];
    const lastWeekData: number[] = [710, 600, 310, 510, 410, 450];

    const THIS_WEEK_SUB: string = 'This Week';
    const LAST_WEEK_SUB: string = 'Last Week';

    const [chartData, setChartData] = useState({
        series: thisWeekData,
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            dataLabels: {
                enabled: false,
            },
            labels: ['Full Time', 'Part Time', 'Temporary', 'Intern', 'Contractor', 'Freelance'],
            colors: ['#FFA1F5', '#BC7AF9', '#4d5dc5', '#A6FF96', '#B5F1CC', '#FF8787'],
            title: {
                text: 'Employee Type Compare - Pie Chart',
                margin: 20,
                style: {
                    fontSize: 15,
                },
            },
            subtitle: {
                text: THIS_WEEK_SUB,
                style: {
                    fontSize: 12,
                    fontWeight: '5',
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            },
        },
    });

    const updateLastWeek = () => {
        setChartData({
            ...chartData,
            series: lastWeekData,
            options: {
                subtitle: {
                    text: LAST_WEEK_SUB,
                },
            },
        });
    };

    const updateThisWeek = () => {
        setChartData({
            ...chartData,
            series: thisWeekData,
            options: {
                subtitle: {
                    text: THIS_WEEK_SUB,
                },
            },
        });
    };

    return (
        <div className="">
            <ReactApexChart options={chartData.options} series={chartData.series} type="pie" height={350} />
            <div className="flex justify-center mt-8">
                <div className="btn mr-5 bg-[#A79277] border-none text-white" onClick={updateThisWeek}>
                    {THIS_WEEK_SUB}
                </div>
                <div className="btn bg-[#A79277] border-none text-white" onClick={updateLastWeek}>
                    {LAST_WEEK_SUB}
                </div>

                <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 "></button>
            </div>
        </div>
    );
};
