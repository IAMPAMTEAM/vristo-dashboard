import AccessPolicySaaSTable from '@/components/DataTables/AccessPolicySaaSTable';
import { MultipleRadarChart } from '@/components/Charts/_partials/MultipleRadarChart';

const PolicySaaS = () => {
  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          <AccessPolicySaaSTable />
        </div>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='panel lg:col-span-1'>
            <MultipleRadarChart
              data={[
                [380, 375, 390, 254],
                [410, 465, 105, 104],
              ]}
              title='Allowed Users Compare - Radar Chart'
              categories={['Slack', 'Notion', 'BitBucket', 'Office365']}
              colors={['#FF76CE', '#FDFFC2']}
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
              colors={['#5E1675', '#EE4266']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicySaaS;
