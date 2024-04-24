import { TopologyRepeat } from '@/components/TopologyRepeat';
import ELBSeoul from '@/assets/images/elb-seoul.svg';
import ELBTokyo from '@/assets/images/elb-tokyo.svg';
import ELBSingapore from '@/assets/images/elb-singapore.svg';
import ELBVirginia from '@/assets/images/elb-virginia.svg';

const LoadBalancers = () => {
    const images = [ELBSeoul, ELBTokyo, ELBSingapore, ELBVirginia];
    const titles = ['Seoul', 'Tokyo', 'Singapore', 'Virginia'];
    return (
        <div>
            <TopologyRepeat imageSrcs={images} title={titles} />
        </div>
    );
};

export default LoadBalancers;
