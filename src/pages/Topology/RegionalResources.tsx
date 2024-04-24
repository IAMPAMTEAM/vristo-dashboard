import { TopologyRepeat } from '@/components/TopologyRepeat';
import RegionalResourcesSeoul from '@/assets/images/regional-resources-seoul.svg';
import RegionalResourcesVirginia from '@/assets/images/regional-resources-virginia.svg';
import RegionalResourcesSingapore from '@/assets/images/regional-resources-singapore.svg';
import RegionalResourcesOregon from '@/assets/images/regional-resources-oregon.svg';

const RegionalResources = () => {
    const images = [RegionalResourcesSeoul, RegionalResourcesVirginia, RegionalResourcesSingapore, RegionalResourcesOregon];
    const titles = ['Seoul', 'Virginia', 'Singapore', 'Oregon'];
    return (
        <div>
            <TopologyRepeat imageSrcs={images} title={titles} />
        </div>
    );
};
export default RegionalResources;
