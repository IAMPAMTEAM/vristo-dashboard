import { useOpenSearchByVpc } from './index';
import ReactApexChart from 'react-apexcharts';
import NetworkTopology from './NetworkTopology';
function VpcChart() {
  const { packetInfo: vpcPacketInfo, byteInfo: vpcByteInfo } = useOpenSearchByVpc({
    vpcCidr: '10.3.0.0',
  });
  if (!vpcPacketInfo || !vpcByteInfo) {
    return;
  }
  return (
    <div className='cont'>
      <div className='cont-header panel'>
        <NetworkTopology />
      </div>
    </div>
  );
}
export default VpcChart;
