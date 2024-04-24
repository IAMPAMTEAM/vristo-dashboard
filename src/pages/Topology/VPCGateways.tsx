import { TopologyRepeat } from '@/components/TopologyRepeat';
import VPCGatewaysSeoul from '@/assets/images/vpc-gateways-seoul.svg';
import VPCGatewaysVirginia from '@/assets/images/vpc-gateways-virginia.svg';

const VPCGateways = () => {
    const images = [VPCGatewaysSeoul, VPCGatewaysVirginia];
    const titles = ['Seoul', 'Virginia'];
    return (
        <div>
            <TopologyRepeat imageSrcs={images} title={titles} />
        </div>
    );
};

export default VPCGateways;
