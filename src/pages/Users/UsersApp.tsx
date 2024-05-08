import DefaultDataTable from '@/components/DataTables/DefaultDataTableFitWidth';
import { useEffect, useState } from 'react';
import { TreemapChart } from '@/components/Charts/_partials/TreemapChart';
import { MultipleRadarChart } from '@/components/Charts/_partials/MultipleRadarChart';
import { VerticalBarChart } from '@/components/Charts/_partials/VerticalBarChart';

const UsersApp = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/iampam-zerotrust-v0.3_users-app.json')
      .then((result) => result.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);

  const radarData = [
    [318, 149, 84, 150],
    [210, 259, 150, 120],
  ];

  const categories = ['Jira', 'Jenkins', 'Git', 'ERP'];

  const treemapData = [
    {
      x: 'Jira',
      y: 318,
    },
    {
      x: 'Jenkins',
      y: 149,
    },
    {
      x: 'Git',
      y: 84,
    },
    {
      x: 'ERP',
      y: 150,
    },
  ];

  const verticalBarData = [
    {
      name: 'Jira',
      data: [318, 210],
    },
    {
      name: 'Jenkins',
      data: [149, 259],
    },
    {
      name: 'Git',
      data: [84, 150],
    },
    {
      name: 'ERP',
      data: [150, 120],
    },
  ];

  const treemapColors = ['#DFA67B'];

  const sortByDescendingOrder = (categories: any, radarData: any) => {
    return [...categories].sort((a, b) => {
      const valueA = radarData[categories.indexOf(a)];
      const valueB = radarData[categories.indexOf(b)];
      return valueB - valueA;
    });
  };

  // categories에 따라 내림차순으로 정렬된 배열 생성
  const sortedCategories1 = sortByDescendingOrder(categories, radarData[0]);
  const sortedCategories2 = sortByDescendingOrder(categories, radarData[1]);

  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          <DefaultDataTable tableData={tableData} tableOption={{}} />
        </div>
        <div className='grid gap-6 lg:grid-cols-5'>
          <div className='panel lg:col-span-2 flex flex-col'>
            <MultipleRadarChart data={radarData} title={''} colors={['#F7418F', '#FC819E']} categories={categories} />
            <div className='stats stats-vertical lg:stats-horizontal shadow bg-[#F0F3FF]'>
              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>1st of Last Week</div>
                <div className='stat-value'>Jira</div>
              </div>
              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>1st of This Week</div>
                <div className='stat-value'>Jenkins</div>
              </div>
            </div>
          </div>
          <div className='panel lg:col-span-3'>
            <TreemapChart data={treemapData} title='Allowed APP Users Compare' colors={treemapColors} />
          </div>
        </div>
        <div className='grid lg:grid-cols-5 lg:grid-rows-2 gap-6'>
          <div className='panel lg:col-span-1 lg:row-span-1'>
            {/* TODO: label 추가 */}
            <p className='text-sm font-semibold mb-4'>Last Week</p>
            <div className='overflow-x-auto'>
              <table className='table'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Category</th>
                    <th>Users Count</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCategories1.map((category, idx) => {
                    return (
                      <tr key={idx}>
                        <th>{idx + 1}</th>
                        <td>{category}</td>
                        <td>{radarData[0][categories.indexOf(category)]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='panel lg:col-span-1 lg:row-span-1'>
            {/* TODO: label 추가 */}
            <p className='text-sm font-semibold mb-4'>This Week</p>
            <div className='overflow-x-auto'>
              <table className='table'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Category</th>
                    <th>Users Count</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCategories2.map((category, idx) => {
                    return (
                      <tr key={idx}>
                        <th>{idx + 1}</th>
                        <td>{category}</td>
                        <td>{radarData[1][categories.indexOf(category)]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='panel lg:col-span-3 lg:row-span-2'>
            <VerticalBarChart data={verticalBarData} colors={['#957DAD', '#D291BC', '#FEC8D8', '#FFDFD3']} categories={['Last Week', 'This Week']} />
          </div>
          {/* <div className='stats shadow panel lg:col-span-2 lg:row-span-1 text-center m-0 mt-auto mb-auto'>
            <div className='stat'>
              <div className='stat-title'>Downloads</div>
              <div className='stat-value'>31K</div>
              <div className='stat-desc'>Jan 1st - Feb 1st</div>
            </div>

            <div className='stat'>
              <div className='stat-title'>New Users</div>
              <div className='stat-value'>4,200</div>
              <div className='stat-desc'>↗︎ 400 (22%)</div>
            </div>

            <div className='stat'>
              <div className='stat-title'>New Registers</div>
              <div className='stat-value'>1,200</div>
              <div className='stat-desc'>↘︎ 90 (14%)</div>
            </div>
          </div> */}

          <div className='panel lg:col-span-2 lg:row-span-1'>TODO: Stats Card</div>
        </div>
      </div>
    </div>
  );
};

export default UsersApp;
