import DefaultDataTable from '@/components/DataTables/DefaultDataTable';
import { StackedVerticalBarChart } from '@/components/Charts/_partials/StackedVerticalBarChart';
import { UpdatingPieChart } from '@/components/Charts/_partials/UpdatingPieChart';
import { useEffect, useState } from 'react';

const ServerAccessControl = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/iampam-zerotrust-v0.3_assets-server-accesscontrol.json')
      .then((result) => result.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);
  const stackedVerticalBarData = [
    {
      name: 'AWS',
      data: [440, 550],
    },
    {
      name: 'Onpremise',
      data: [190, 230],
    },
  ];

  const updatingPieChartData = [
    [200, 150],
    [410, 490],
  ];

  const catgegories = ['Last Week', 'This Week'];

  const stackedVerticalBarColors = ['#FF76CE', '#A3D8FF'];

  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          <DefaultDataTable tableData={tableData} tableOption={{}} />
        </div>
        <div className='grid lg:grid-cols-5 gap-6'>
          <div className='panel lg:col-span-2 flex flex-col'>
            <StackedVerticalBarChart data={stackedVerticalBarData} categories={catgegories} colors={stackedVerticalBarColors} title='Infra Type Compare' />
            <div className='stats stats-vertical lg:stats-horizontal shadow bg-[#F0F3FF]'>
              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>Last Week</div>
                <div className='stat-value'>630</div>
              </div>

              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>This Week</div>
                <div className='stat-value'>780</div>
              </div>
            </div>
          </div>
          <div className='panel lg:col-span-3'>
            <UpdatingPieChart data={updatingPieChartData} labels={['CestOS', 'Windows']} title='OS Type Compare' colors={['#EA5455', '#EEB0B0']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerAccessControl;
