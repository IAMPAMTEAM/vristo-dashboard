import DefaultDataTable from '@/components/DataTables/DefaultDataTable';
import { useEffect, useState } from 'react';

const PolicyDevops = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('');
  }, []);

  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'></div>
      </div>
    </div>
  );
};

export default PolicyDevops;
