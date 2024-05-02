import { StackedVerticalBarChart } from '@/components/Charts/_partials/StackedVerticalBarChart';
import { UpdatingPieChart } from '@/components/Charts/_partials/UpdatingPieChart';
import DefaultDataTable from '@/components/DataTables/DefaultDataTable';
import { useEffect, useState } from 'react';

const DBAccessControl = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/iampam-zerotrust-v0.3_assets-db-accesscontrol.json')
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
    [317, 254],
    [384, 298],
  ];

  const catgegories = ['Last Week', 'This Week'];

  const stackedVerticalBarColors = ['#03AED2', '#FDDE55'];

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
            <UpdatingPieChart data={updatingPieChartData} labels={['CestOS', 'Windows']} title='OS Type Compare' colors={['#DD5746', '#77B0AA']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBAccessControl;
