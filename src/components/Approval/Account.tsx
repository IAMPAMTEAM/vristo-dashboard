const Account = () => {
    return (
        <div className="grid lg:grid-cols-5 lg:grid-row-5 gap-6">
            <div className="panel lg:col-span-3">
                <div className="space-y-5 p-5">
                    <label className="input input-bordered flex items-center gap-2">
                        이름
                        <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        아이디
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        팀
                        <input type="text" className="grow" placeholder="메가존클라우드" />
                    </label>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                            인프라 구분
                            <input type="text" className="grow" placeholder="IDC" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            자원 유형
                            <input type="text" className="grow" placeholder="Server-Account" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="panel lg:col-span-2 overflow-x-auto">
                <h2 className="font-semibold mb-5">프로세스 (결재 순서) </h2>
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

            <div className="panel lg:col-span-3"></div>
            <div className="panel lg:col-span-2">
                <h2 className="font-semibold mb-5">Notes</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Note</th>
                                <th>Register</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <div className="badge badge-warning">Request</div>
                                </th>
                                <td>계정 요청합니다.</td>
                                <td>사용자 IDC(user_idc)</td>
                                <td>20-05-20 09:44:13</td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="badge badge-info">Approve</div>
                                </th>
                                <td>승인합니다.</td>
                                <td>HYBRIX(hybrix)</td>
                                <td>20-05-20 09:45:53</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Account;
