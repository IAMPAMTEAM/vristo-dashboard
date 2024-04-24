import { TopologyRepeat } from '@/components/TopologyRepeat';
import VPCPeeringSeoul from '@/assets/images/vpc-peering-seoul.svg';
import VPCPeeringVirginia from '@/assets/images/vpc-peering-virginia.svg';

const VPCPeering = () => {
    const images = [VPCPeeringSeoul, VPCPeeringVirginia];
    const titles = ['Seoul', 'Virginia'];
    return (
        <div>
            <TopologyRepeat imageSrcs={images} title={titles} />
        </div>
    );
};

export default VPCPeering;
