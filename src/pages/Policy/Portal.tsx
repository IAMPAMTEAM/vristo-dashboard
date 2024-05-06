import DefaultDataTable from '@/components/DataTables/DefaultDataTable';
import { MultipleRadarChart } from '@/components/Charts/_partials/MultipleRadarChart';
import AccessPolicyDevopsTable from '@/components/DataTables/AccessPolicyDevopsTable';

const Portal = () => {
  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          {/* <DefaultDataTable tableData={undefined} tableOption={{}} /> */}
          <AccessPolicyDevopsTable />
        </div>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='panel lg:col-span-1'>
            <MultipleRadarChart
              data={[
                [280, 175, 390, 154, 140, 245, 390, 154],
                [410, 165, 305, 164, 245, 245, 305, 164],
              ]}
              title='Allowed Users Compare - Radar Chart'
              categories={['Mgmt', 'Diag', 'Monitor', 'Audit', 'Approval', 'Admin', 'Debug', 'OTPPortal']}
              colors={['#FFBB70', '#FFEC9E']}
            />
          </div>
          <div className='panel lg:col-span-1'>
            <MultipleRadarChart
              data={[
                [280, 175, 390],
                [410, 165, 405],
              ]}
              title='Allowed Users Compare - Radar Chart'
              categories={['InfraAWS', 'InfraIDC', 'InfraHybrid']}
              colors={['#C40C0C', '#FF6500']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
