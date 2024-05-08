import DefaultDataTable from '@/components/DataTables/DefaultDataTableFitWidth';
import { useEffect, useState } from 'react';

const DBAWSRDS = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/iampam-zerotrust-v0.3_assets-db-aws-rds.json')
      .then((result) => result.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);
  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          <DefaultDataTable tableData={tableData} tableOption={{}} />
        </div>
      </div>
    </div>
  );
};

export default DBAWSRDS;
