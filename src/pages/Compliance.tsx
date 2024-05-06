import { useEffect, useState } from 'react';
import axios from 'axios';

const Compliance = () => {
  // TODO: Report API 연결

  // TODO: DOM으로 Report 업데이트
  const [reportHTML, setReportHTML] = useState();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://13.209.176.171:9040/create?account=mz_vincent').then((result) => {
      console.log('result');
      console.log(result);
    });
  });

  return (
    <div>
      <div className='grid'>
        <div className='panel'></div>
      </div>
    </div>
  );
};

export default Compliance;
