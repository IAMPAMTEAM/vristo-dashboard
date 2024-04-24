import { TopologyRepeat } from '@/components/TopologyRepeat';
import SubnetSeoulA from '@/assets/images/subnet-seoulA.svg';
import SubnetSeoulB from '@/assets/images/subnet-seoulB.svg';
import SubnetSingapore from '@/assets/images/subnet-singapore.svg';
import SubnetVirginia from '@/assets/images/subnet-virginia.svg';

const Subnets = () => {
    const images = [SubnetSeoulA, SubnetSeoulB, SubnetSingapore, SubnetVirginia];
    const titles = ['Seoul A', 'Seoul B', 'Singapore', 'Virginia'];
    return (
        <div>
            <TopologyRepeat imageSrcs={images} title={titles} />
        </div>
    );
};

export default Subnets;
