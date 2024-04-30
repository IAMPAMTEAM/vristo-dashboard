import DefaultDataTable from '@/components/DataTables/DefaultDataTable';
import { MultipleRadarChart } from '@/components/Charts/_partials/MultipleRadarChart';
import { UpdatingPieChart } from '@/components/Charts/_partials/UpdatingPieChart';

const UsersDevOps = () => {
  const data = [
    [280, 175, 390, 154, 140, 245],
    [410, 165, 305, 164, 245, 245],
  ];
  const categories = ['Onpremise', 'AWS', 'Azure', 'Server', 'DB', 'Network'];
  const piechartColors = ['#A87676', '#F1EF99', '#E1AFD1', '#9CAFAA', '#8E7AB5', '#AAD7D9'];

  // TODO: Data Table
  const tableOption = {};
  return (
    <div>
      <div className='grid gap-6'>
        <div className='grid lg:grid-cols-1 gap-6'>
          <div className='panel'>
            <DefaultDataTable tableData={undefined} tableOption={tableOption} />
          </div>
        </div>
        <div className='grid lg:grid-cols-5 gap-6'>
          <div className='panel lg:col-span-2'>
            <MultipleRadarChart data={data} title='Allowed Users Compare - Radar Chart' colors={['#FFBB70', '#FFEC9E']} categories={categories} />
          </div>
          <div className='panel lg:col-span-2'>
            <UpdatingPieChart data={data} labels={categories} colors={piechartColors} title='Allowed Users Compare - Pie Chart' />
          </div>
          <div className='panel lg:col-span-1'></div>
        </div>
        <div className='grid lg:grid-cols-5 gap-6'>
          <div className='panel lg:col-span-1'>
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
                  {categories.map((category, idx) => {
                    return (
                      <tr>
                        <th>{idx + 1}</th>
                        <td>{category}</td>
                        <td>{data[0][idx]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='panel lg:col-span-1'>
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
                  {categories.map((category, idx) => {
                    return (
                      <tr>
                        <th>{idx + 1}</th>
                        <td>{category}</td>
                        <td>{data[1][idx]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDevOps;
