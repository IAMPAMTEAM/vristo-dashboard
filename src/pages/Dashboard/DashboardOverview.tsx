import BgDashboardOverviewTop from '@/assets/images/bg-dashboardoverview-top.png';
import BgDashboardOverviewBottom from '@/assets/images/bg-dashboardoverview-bottom.png';

const DashboardOverview = () => {
  return (
    <div className='flex flex-col'>
      <img className='w-full' src={BgDashboardOverviewTop} alt='' />
      <img className='w-full' src={BgDashboardOverviewBottom} alt='' />
    </div>
  );
};

export default DashboardOverview;
