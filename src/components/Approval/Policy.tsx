import { useEffect, useState } from 'react';
import DefaultDataTable from '../DataTables/DefaultDataTable';
import IconTrash from '../Icon/IconTrash';
import IconPlus from '../Icon/IconPlus';
import IconRefresh from '../Icon/IconRefresh';

const Policy = ({ formType }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [processData, setProcessData] = useState([]);
  const [accountData, setAccountData] = useState([]);
  const [notesData, setNotesData] = useState([]);
  const [resource, setResource] = useState<string>('');
  const [dataTable, setDataTable] = useState([]);

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

    console.log(formType);
    // setResource(formType);
    // console.log(resource, 'dfasfadsfds');
    if (formType) {
      switch (formType) {
        case 'server':
          fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/server.json')
            .then((result) => result.json())
            .then((data) => setDataTable(data));
          break;
        case 'db':
          fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/db.json')
            .then((result) => result.json())
            .then((data) => setDataTable(data));
          break;
        case 'vpn':
          fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/vpn.json')
            .then((result) => result.json())
            .then((data) => setDataTable(data));
          break;
        case 'app':
          fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/app.json')
            .then((result) => result.json())
            .then((data) => setDataTable(data));
          break;
        case 'saas':
          fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/saas.json')
            .then((result) => result.json())
            .then((data) => setDataTable(data));
          break;
        case 'aws iam':
          fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/awsIAM.json')
            .then((result) => result.json())
            .then((data) => setDataTable(data));
          break;
        case 'portal':
          fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/portal.json')
            .then((result) => result.json())
            .then((data) => setDataTable(data));
          break;
        default:
      }
    }
  }, []);

  return (
    <div className='grid lg:grid-cols-7 lg:grid-row-10 gap-6'>
      <div className='panel lg:col-span-3'>
        {accountData.map((data, index) => (
          <div className='space-y-5 p-5'>
            <div className='grid lg:grid-cols-2 gap-4'>
              <label className='input input-bordered flex items-center gap-2'>
                이름
                <input type='text' className='grow pl-4 font-light' value={data['accoutUsername']} />
              </label>
              <label className='input input-bordered flex items-center gap-2'>
                아이디
                <input type='text' className='grow pl-4 font-light' value={data['accountRequestWho']} />
              </label>
            </div>
            <label className='input input-bordered flex items-center gap-2'>
              유효시한
              <input type='text' className='grow pl-4 font-light' value={data['accountRenewalDue']} />
            </label>
            <label className='input input-bordered flex items-center gap-2'>
              잔여 유효일
              <input type='text' className='grow pl-4 font-light' value={data['accountRenewalDate']} />
            </label>

            <label className='input input-bordered flex items-center gap-2'>
              Credential URI
              <input type='text' className='grow pl-4 font-light' value={data['accountCredentialsUri']} />
            </label>
          </div>
        ))}
        {/* <div className='space-y-5 p-5'>
          <label className='input flex items-center gap-2'>
            Name
            <input type='text' className='grow' placeholder='Daisy' disabled />
          </label>
          <label className='input flex items-center gap-2'>
            ID
            <input type='text' className='grow' placeholder='daisy@site.com' disabled />
          </label>
          <div className='grid lg:grid-cols-2 gap-4'>
            <label className='input flex items-center gap-2'>
              유효시한
              <input type='text' className='grow' placeholder='IDC' disabled />
            </label>
            <label className='input flex items-center gap-2'>
              잔여 유효일
              <input type='text' className='grow' placeholder='Server-Account' disabled />
            </label>
          </div>
          <label className='input flex items-center gap-2'>
            Credential URI
            <input type='text' className='grow' placeholder='메가존클라우드' disabled />
          </label>
        </div> */}
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
              <tr>
                <th key={index}>
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

      {/* <div className='panel lg:col-span-3 lg:row-span-5'>
        <div className='flex flex-col'>
          <div className='p-5'>
            <label className='input flex flex-col gap-2 mb-4'>
              <p>Resource Name</p>
              <input type='text' className='grow' placeholder='null' disabled />
            </label>
            <div className='flex gap-6 mt-10'>
              <label className='input flex flex-col gap-2'>
                <p>Resource Access Time</p>
                <p className='flex gap-4 font-extralight text-sm'>
                  <span>Any Time</span>
                  <span>~</span>
                  <span>Any Time</span>
                </p>
              </label>
              <label className='input flex flex-col justify-start items-start'>
                <p>Resource OTP Authentication</p>
                <p className='flex gap-4'>
                  <input type='checkbox' className='toggle mt-1' checked={isAuthenticated} onClick={clickToggle} disabled />
                  {isAuthenticated ? <span className='text-xs pt-2 text-blue-500'>YES</span> : <span className='text-xs pt-2 text-red-500'>NO</span>}
                </p>
              </label>
              <label className='input flex flex-col'>
                <p>지원 접근 계정</p>
                <div className='join'>
                  <p className='flex gap-4'>
                    <input className='join-item w-60' type='text' placeholder='user_account' disabled />
                  </p>
                  <div className='indicator'>
                    <button className='btn join-item bg-blue-300 border-none text-white'>Add</button>
                  </div>
                </div>
              </label>
            </div>
            <div className='mt-5'>
              <label className='flex flex-col p-5 gap-6'>
                <p>명령어 제한 방식</p>
                <div className='flex gap-4'>
                  <input type='radio' name='radio-1' className='radio' checked={false} />
                  <p className='text-sm'> White List</p>
                  <input type='radio' name='radio-1' className='radio' checked={false} />
                  <p>Black List</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div> */}

      <div className='panel lg:col-span-7 lg:row-span-3'>
        <div className='flex place-content-between'>
          <button className='btn mb-4 shadow-none btn-error text-white'>
            <IconTrash />
            <p>삭제</p>
          </button>
          <div className='flex gap-4'>
            <button className='btn mb-4 shadow-none border-none bg-[#9fa5aa] text-white'>
              <IconRefresh />
              <p>선택 초기화</p>
            </button>
            <button className='btn mb-4 shadow-none bg-[#8996d6] border-none text-white'>
              <IconPlus />
              <p>추가</p>
            </button>
          </div>
        </div>
        <div>
          <DefaultDataTable tableData={dataTable} tableOption={{}} />
        </div>
      </div>
    </div>
  );
};

export default Policy;
