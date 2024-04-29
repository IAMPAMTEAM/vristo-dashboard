import { useEffect, useState } from 'react';
import DefaultDataTable from '../DataTables/DefaultDataTable';
import IconRetry from '@/assets/icons/reload.svg';
import IconChecks from '../Icon/IconChecks';
import IconTrash from '../Icon/IconTrash';
import IconPlus from '../Icon/IconPlus';
import IconRefresh from '../Icon/IconRefresh';

const Policy = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const clickToggle = () => {
        setIsAuthenticated(!isAuthenticated);
    };

    const [rowData, setRowData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/users-hr')
            .then((result) => result.json())
            .then((data) => {
                setRowData(data);
            });
    }, []);

    return (
        <div className="grid lg:grid-cols-5 lg:grid-row-10 gap-6">
            <div className="panel lg:col-span-3">
                <div className="space-y-5 p-5">
                    <label className="input flex items-center gap-2">
                        Name
                        <input type="text" className="grow" placeholder="Daisy" disabled />
                    </label>
                    <label className="input flex items-center gap-2">
                        ID
                        <input type="text" className="grow" placeholder="daisy@site.com" disabled />
                    </label>
                    <label className="input flex items-center gap-2">
                        Team
                        <input type="text" className="grow" placeholder="메가존클라우드" disabled />
                    </label>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <label className="input flex items-center gap-2">
                            Infra Division
                            <input type="text" className="grow" placeholder="IDC" disabled />
                        </label>
                        <label className="input flex items-center gap-2">
                            Resource Category
                            <input type="text" className="grow" placeholder="Server-Account" disabled />
                        </label>
                    </div>
                </div>
            </div>
            <div className="panel lg:col-span-2 overflow-x-auto">
                <h2 className="font-semibold mb-5">Process (결재 순서) </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody className="font-light">
                        <tr>
                            <th>
                                <div className="badge badge-info gap-2">Approve</div>
                            </th>
                            <td>HYBRIX (hybrix)</td>
                            <td>메가존클라우드</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="panel lg:col-span-3 lg:row-span-1 space-y-5">
                <div className="flex p-5">
                    <label className="input flex flex-col gap-2">
                        <p>유효시한</p>
                        <input type="text" className="grow" placeholder="06/08/2021" disabled />
                    </label>
                    <label className="input flex flex-col gap-2">
                        <p>잔여 유효일</p>
                        <input type="text" className="grow" placeholder="454" disabled />
                    </label>
                    <label className="input flex flex-col gap-2">
                        <p>접근제어 서버</p>
                        <input type="text" className="grow" placeholder="AWS-DBAccessManager" disabled />
                    </label>
                </div>
                <div className="flex flex-col pl-8">
                    <p className="font-semibold mb-2">Source IP</p>
                    <div className="join">
                        <select className="select w-40 max-w-xs join-item" disabled>
                            <option>All</option>
                        </select>
                        <div className="indicator">
                            <button className="btn join-item bg-blue-300 border-none text-white">Add</button>
                        </div>
                    </div>
                    <div className="badge badge-neutral ml-2 mt-4">All </div>
                </div>
            </div>
            <div className="panel flex flex-col lg:col-span-2 lg:row-span-6 gap-6">
                <h2 className="font-semibold mb-5"> Notes </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Note</th>
                            <th>Register</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="font-light">
                        <tr>
                            <th>
                                <div className="badge badge-warning gap-2">Request</div>
                            </th>
                            <td>사용자 AWS(user_aws)</td>
                            <td>20-06-08 11:01:33</td>
                        </tr>
                        <tr>
                            <th>
                                <div className="badge badge-warning gap-2">Request</div>
                            </th>
                            <td>사용자 AWS(user_aws)</td>
                            <td>20-06-08 11:01:33</td>
                        </tr>
                        <tr>
                            <th>
                                <div className="badge badge-warning gap-2">Request</div>
                            </th>
                            <td>사용자 AWS(user_aws)</td>
                            <td>20-06-08 11:01:33</td>
                        </tr>
                        <tr>
                            <th>
                                <div className="badge badge-warning gap-2">Request</div>
                            </th>
                            <td>사용자 AWS(user_aws)</td>
                            <td>20-06-08 11:01:33</td>
                        </tr>
                    </tbody>
                </table>
                <textarea className="textarea textarea-bordered" cols={70} rows={7} placeholder="Enter something"></textarea>
                <div className="flex justify-end gap-2">
                    <button className="btn btn-warning border-none">
                        <img src={IconRetry} width={14} />
                        <p>Return Request</p>
                    </button>
                    <button className="btn bg-green-600 border-none text-white">
                        <IconChecks />
                        <p>Send Comments</p>
                    </button>
                </div>
            </div>

            <div className="panel lg:col-span-3 lg:row-span-5">
                <div className="flex flex-col">
                    <div className="p-5">
                        <label className="input flex flex-col gap-2 mb-4">
                            <p>Resource Name</p>
                            <input type="text" className="grow" placeholder="null" disabled />
                        </label>
                        <div className="flex gap-6 mt-10">
                            <label className="input flex flex-col gap-2">
                                <p>Resource Access Time</p>
                                <p className="flex gap-4 font-extralight text-sm">
                                    <span>Any Time</span>
                                    <span>~</span>
                                    <span>Any Time</span>
                                </p>
                            </label>
                            <label className="input flex flex-col justify-start items-start">
                                <p>Resource OTP Authentication</p>
                                <p className="flex gap-4">
                                    <input type="checkbox" className="toggle mt-1" checked={isAuthenticated} onClick={clickToggle} disabled />
                                    {isAuthenticated ? <span className="text-xs pt-2 text-blue-500">YES</span> : <span className="text-xs pt-2 text-red-500">NO</span>}
                                </p>
                            </label>
                            <label className="input flex flex-col">
                                <p>지원 접근 계정</p>
                                <div className="join">
                                    <p className="flex gap-4">
                                        <input className="join-item w-60" type="text" placeholder="user_account" disabled />
                                    </p>
                                    <div className="indicator">
                                        <button className="btn join-item bg-blue-300 border-none text-white">Add</button>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="mt-5">
                            <label className="flex flex-col p-5 gap-6">
                                <p>명령어 제한 방식</p>
                                <div className="flex gap-4">
                                    <input type="radio" name="radio-1" className="radio" checked={false} />
                                    <p className="text-sm"> White List</p>
                                    <input type="radio" name="radio-1" className="radio" checked={false} />
                                    <p>Black List</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="panel lg:col-span-5 lg:row-span-3">
                <div className="flex place-content-between">
                    <button className="btn mb-4 shadow-none btn-error text-white">
                        <IconTrash />
                        <p>삭제</p>
                    </button>
                    <div className="flex gap-4">
                        <button className="btn mb-4 shadow-none border-none bg-[#9fa5aa] text-white">
                            <IconRefresh />
                            <p>선택 초기화</p>
                        </button>
                        <button className="btn mb-4 shadow-none bg-[#8996d6] border-none text-white">
                            <IconPlus />
                            <p>추가</p>
                        </button>
                    </div>
                </div>
                {/* TODO: Data Rendering */}
                <DefaultDataTable tableData={rowData} />
            </div>
        </div>
    );
};

export default Policy;
