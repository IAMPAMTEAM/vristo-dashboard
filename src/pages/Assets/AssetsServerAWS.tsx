import DefaultDataTable from '@/components/DataTables/DefaultDataTableFitWidth';
import { StackedVerticalBarChart } from '@/components/Charts/_partials/StackedVerticalBarChart';
import { UpdatingPieChart } from '@/components/Charts/_partials/UpdatingPieChart';
import { useEffect, useState } from 'react';

const AssetsServerAWS = () => {
  const tableOption = {};
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/iampam-zerotrust-v0.3_assets-server-aws.json')
      .then((result) => result.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);
  const stackedVerticalBarData = [
    {
      name: 'AWS',
      data: [140, 310],
    },
    {
      name: 'Onpremise',
      data: [290, 230],
    },
  ];

  const catgegories = ['Last Week', 'This Week'];

  const stackedVerticalBarColors = ['#BC7FCD', '#FFCDEA'];

  const updatingPieChartData = [
    [200, 250],
    [305, 248],
  ];
  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          <DefaultDataTable tableData={tableData} tableOption={tableOption} />
        </div>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='panel lg:col-span-1 flex flex-col'>
            <StackedVerticalBarChart data={stackedVerticalBarData} categories={catgegories} title='Instance State Compare' colors={stackedVerticalBarColors} />
            <div className='stats stats-vertical lg:stats-horizontal shadow bg-[#F0F3FF]'>
              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>Stopped</div>
                <div className='stat-value'>430</div>
              </div>
              <div className='stat text-center hover:opacity-70 hover:cursor-pointer'>
                <div className='stat-title'>Running</div>
                <div className='stat-value'>540</div>
              </div>
            </div>
          </div>
          <div className='panel lg:col-span-1'>
            <UpdatingPieChart data={updatingPieChartData} labels={['Stopped', 'Running']} title='Instance State Compare' colors={['#F3D0D7', '#FFEFEF']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsServerAWS;
