import DefaultDataTable from '@/components/DataTables/DefaultDataTable';
import { useEffect, useState } from 'react';
import { TreemapChart } from '@/components/Charts/_partials/TreemapChart';
import { MultipleRadarChart } from '@/components/Charts/_partials/MultipleRadarChart';
import { VerticalBarChart } from '@/components/Charts/_partials/VerticalBarChart';

const UsersSaaS = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/iampam-zerotrust-v0.3_users-saas.json')
      .then((result) => result.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);

  const radarData = [
    [365, 250, 119, 370],
    [448, 279, 89, 410],
  ];

  const categories = ['Notion', 'Office365', 'Bitbucket', 'Slack'];

  const treemapData = [
    {
      x: 'Notion',
      y: 165,
    },
    {
      x: 'Office365',
      y: 250,
    },
    {
      x: 'Bitbucket',
      y: 119,
    },
    {
      x: 'Slack',
      y: 310,
    },
  ];

  const verticalBarData = [
    {
      name: 'Notion',
      data: [365, 448],
    },
    {
      name: 'Office365',
      data: [250, 279],
    },
    {
      name: 'Bitbucket',
      data: [119, 89],
    },
    {
      name: 'Slack',
      data: [370, 410],
    },
  ];

  const treemapColors = ['#5356FF'];

  const sortByDescendingOrder = (categories, radarData) => {
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
            <MultipleRadarChart data={radarData} title={''} colors={['#7A316F', '#CD6688']} categories={categories} />
            <div className='stats stats-vertical lg:stats-horizontal shadow bg-[#F0F3FF]'>
              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>1st of Last Week</div>
                <div className='stat-value'>Slack</div>
              </div>
              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>1st of This Week</div>
                <div className='stat-value'>Notion</div>
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
            <p>Last Week</p>
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
            <p>This Week</p>
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
            <VerticalBarChart data={verticalBarData} colors={['#0C356A', '#279EFF', '#40F8FF', '#D5FFD0']} categories={['Last Week', 'This Week']} />
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

export default UsersSaaS;
