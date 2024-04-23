import IconShoppingBag from '@/components/Icon/IconShoppingBag';
import { useState } from 'react';

const Index = () => {
    const [cardRows, setCardRows] = useState(0);
    const [cardColumns, setCardColumns] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);
    const [colSpan1, setColSpan1] = useState(0);
    const [colSpan2, setColSpan2] = useState(0);
    const [colSpan3, setColSpan3] = useState(0);
    const [colSpan4, setColSpan4] = useState(0);

    fetch('http://localhost:3000/datas')
        .then(async (data) => await data.json())
        .then((json) => {
            const { cardRows, cardColumns, totalWidth, cardList } = json;

            setCardRows(cardRows);
            setCardColumns(cardColumns);
            setTotalWidth(totalWidth);

            setColSpan1(cardList[0]['widthRatio']);
            setColSpan2(cardList[1]['widthRatio']);
            setColSpan3(cardList[2]['widthRatio']);
            setColSpan4(cardList[3]['widthRatio']);
        });

    return (
        <div>
            <div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        {/* <Link to="#" className="text-primary hover:underline">
                        Users
                    </Link> */}
                    </li>
                    <li className="befor0000e:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Profile</span>
                    </li>
                </ul>
                <div className="pt-5">
                    <div className={`grid lg:grid-cols-10 gap-5 mb-5`}>
                        {/* <div  className={`grid grid-cols-1 lg:grid-cols-3 lg:grid-cols-4 gap-5 mb-5`}> */}
                        <div className={`panel lg:col-span-${colSpan1} `}>
                            <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">Profile</h5>
                            </div>
                            <div className="mb-5">
                                <div className="flex flex-col justify-center items-center">
                                    <img src="/assets/images/user.png" alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                                    <p className="font-semibold text-primary text-xl">name</p>
                                </div>
                                <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                                    <li className="flex items-center gap-2">career</li>
                                    <li className="flex items-center gap-2">birth</li>
                                    <li className="flex items-center gap-2">where to live</li>
                                    <li>
                                        <button className="flex items-center gap-2">
                                            <span className="text-primary truncate">email@abc.com</span>
                                        </button>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="whitespace-nowrap" dir="ltr">
                                            phone number
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`panel lg:col-span-${colSpan2}`}>
                            <div className="mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">Task</h5>
                            </div>
                            <div className="mb-5">
                                <div className="table-responsive text-[#515365] dark:text-white-light font-semibold">
                                    {/* <table className="whitespace-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Projects</th>
                                                <th>Progress</th>
                                                <th>Task Done</th>
                                                <th className="text-center">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody className="dark:text-white-dark">
                                            <tr>
                                                <td>Figma Design</td>
                                                <td>
                                                    <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                        <div className="bg-danger rounded-full w-[29.56%]"></div>
                                                    </div>
                                                </td>
                                                <td className="text-danger">29.56%</td>
                                                <td className="text-center">2 mins ago</td>
                                            </tr>
                                            <tr>
                                                <td>Vue Migration</td>
                                                <td>
                                                    <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                        <div className="bg-info rounded-full w-1/2"></div>
                                                    </div>
                                                </td>
                                                <td className="text-success">50%</td>
                                                <td className="text-center">4 hrs ago</td>
                                            </tr>
                                            <tr>
                                                <td>Flutter App</td>
                                                <td>
                                                    <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                        <div className="bg-warning rounded-full  w-[39%]"></div>
                                                    </div>
                                                </td>
                                                <td className="text-danger">39%</td>
                                                <td className="text-center">a min ago</td>
                                            </tr>
                                            <tr>
                                                <td>API Integration</td>
                                                <td>
                                                    <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                        <div className="bg-success rounded-full  w-[78.03%]"></div>
                                                    </div>
                                                </td>
                                                <td className="text-success">78.03%</td>
                                                <td className="text-center">2 weeks ago</td>
                                            </tr>

                                            <tr>
                                                <td>Blog Update</td>
                                                <td>
                                                    <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                        <div className="bg-secondary  rounded-full  w-full"></div>
                                                    </div>
                                                </td>
                                                <td className="text-success">100%</td>
                                                <td className="text-center">18 hrs ago</td>
                                            </tr>
                                            <tr>
                                                <td>Landing Page</td>
                                                <td>
                                                    <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                        <div className="bg-danger rounded-full  w-[19.15%]"></div>
                                                    </div>
                                                </td>
                                                <td className="text-danger">19.15%</td>
                                                <td className="text-center">5 days ago</td>
                                            </tr>
                                            <tr>
                                                <td>Shopify Dev</td>
                                                <td>
                                                    <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                        <div className="bg-primary rounded-full w-[60.55%]"></div>
                                                    </div>
                                                </td>
                                                <td className="text-success">60.55%</td>
                                                <td className="text-center">8 days ago</td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
                        <div className={`panel xl:col-span-${colSpan3}`}>
                            <div className="mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">Summary</h5>
                            </div>
                            <div className="space-y-4">
                                <div className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                                    <div className="flex items-center justify-between p-4 py-2">
                                        <div className="grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light">
                                            <IconShoppingBag />
                                        </div>
                                        <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                            <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                                Income
                                                <span className="block text-base text-[#515365] dark:text-white-light">$92,600</span>
                                            </h6>
                                            <p className="ltr:ml-auto rtl:mr-auto text-secondary">90%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                                    <div className="flex items-center justify-between p-4 py-2">
                                        <div className="grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light">
                                            <IconShoppingBag />
                                        </div>
                                        <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                            <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                                Income
                                                <span className="block text-base text-[#515365] dark:text-white-light">$92,600</span>
                                            </h6>
                                            <p className="ltr:ml-auto rtl:mr-auto text-secondary">90%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                                    <div className="flex items-center justify-between p-4 py-2">
                                        <div className="grid place-content-center w-9 h-9 rounded-md bg-info-light dark:bg-info text-info dark:text-info-light"></div>
                                        <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                            <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                                Profit
                                                <span className="block text-base text-[#515365] dark:text-white-light">$37,515</span>
                                            </h6>
                                            <p className="ltr:ml-auto rtl:mr-auto text-info">65%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                                    <div className="flex items-center justify-between p-4 py-2">
                                        <div className="grid place-content-center w-9 h-9 rounded-md bg-warning-light dark:bg-warning text-warning dark:text-warning-light"></div>
                                        <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                            <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                                Expenses
                                                <span className="block text-base text-[#515365] dark:text-white-light">$55,085</span>
                                            </h6>
                                            <p className="ltr:ml-auto rtl:mr-auto text-warning">80%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`panel xl:col-span-${colSpan4}`}>
                            <div className="flex items-center justify-between mb-10">
                                <h5 className="font-semibold text-lg dark:text-white-light">Pro Plan</h5>
                                <button className="btn btn-primary">Renew Now</button>
                            </div>
                            <div className="group">
                                <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                    <li>10,000 Monthly Visitors</li>
                                    <li>Unlimited Reports</li>
                                    <li>2 Years Data Storage</li>
                                </ul>
                                <div className="flex items-center justify-between mb-4 font-semibold">
                                    <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold"></p>
                                    <p className="text-info">$25 / month</p>
                                </div>
                                <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                                    <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
