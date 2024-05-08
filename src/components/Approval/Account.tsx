import { useEffect, useState } from 'react';

interface Props {
  formRequestWho: string;
}

const Account = () => {
  const [processData, setProcessData] = useState([]);
  const [accountData, setAccountData] = useState([]);
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/process.json')
      .then((result) => result.json())
      .then((data) => setProcessData(data));

    fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/account.json')
      .then((result) => result.json())
      .then((data) => setAccountData(data));

    fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/notes.json')
      .then((result) => result.json())
      .then((data) => setNotesData(data));
  });

  return (
    <div className='grid lg:grid-cols-5 lg:grid-row-5 gap-6'>
      <div className='panel lg:col-span-3 '>
        {accountData.map((data, index) => (
          <div className='space-y-5 p-5' key={index}>
            <div className='grid lg:grid-cols-2 gap-4'>
              <label className='input input-bordered flex items-center gap-2'>
                이름
                <input type='text' className='grow pl-4 font-light' readOnly value={data['accoutUsername']} />
              </label>
              <label className='input input-bordered flex items-center gap-2'>
                아이디
                <input type='text' className='grow pl-4 font-light' readOnly value={data['accountRequestWho']} />
              </label>
            </div>
            <div className='grid lg:grid-cols-2 gap-4'>
              <label className='input input-bordered flex items-center gap-2'>
                유효시한
                <input type='text' className='grow pl-4 font-light' readOnly value={data['accountRenewalDue']} />
              </label>
              <label className='input input-bordered flex items-center gap-2'>
                잔여 유효일
                <input type='text' className='grow pl-4 font-light' readOnly value={data['accountRenewalDate']} />
              </label>
            </div>
            <label className='input input-bordered flex items-center gap-2'>
              Credential URI
              <input type='text' className='grow pl-4 font-light' readOnly value={data['accountCredentialsUri']} />
            </label>
          </div>
        ))}
      </div>
      <div className='panel lg:col-span-2 overflow-x-auto'>
        <h2 className='font-semibold mb-5'>프로세스 (결재 순서) </h2>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody className='font-light'>
            {processData.map((data, index) => (
              <tr key={index}>
                <th>
                  {data['processType'] === 'agree' ? (
                    <div className='badge badge-info gap-2'>{data['processType']}</div>
                  ) : data['processType'] === 'approve' ? (
                    <div className='badge badge-success gap-2'>{data['processType']}</div>
                  ) : data['processType'] === 'review' ? (
                    <div className='badge badge-warning gap-2'>{data['processType']}</div>
                  ) : (
                    <div className='badge badge-error gap-2'>{data['processType']}</div>
                  )}
                </th>
                <td>{data['processUsername']}</td>
                <td>{data['processUsernameTeam']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='panel lg:col-span-3'>
        <div className='space-y-5 p-5'>
          <label className='input input-bordered flex items-center gap-2'>
            계정 아이디
            <input type='text' className='grow' placeholder='Daisy' />
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            유효시한
            <input type='text' className='grow' placeholder='2024/08/12' />
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            잔여 유효일
            <input type='text' className='grow' placeholder='125' />
          </label>
        </div>
      </div>
      <div className='panel lg:col-span-2'>
        <h2 className='font-semibold mb-5'>Notes</h2>
        <div className='overflow-x-auto'>
          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Note</th>
                <th>Register</th>
              </tr>
            </thead>
            <tbody>
              {notesData.map((data, index) => (
                <tr key={index}>
                  <th>
                    {data['processType'] === 'agree' ? (
                      <div className='badge badge-info'>{data['processType']}</div>
                    ) : data['processType'] === 'approve' ? (
                      <div className='badge badge-success'>{data['processType']}</div>
                    ) : (
                      <div className='badge badge-warning'>{data['processType']}</div>
                    )}
                  </th>
                  <td>{data['note']}</td>
                  <td>{data['processUsername']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Account;
