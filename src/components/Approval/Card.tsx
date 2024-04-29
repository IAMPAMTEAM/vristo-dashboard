const Card = () => {
    return (
        <div>
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
        </div>
    );
};

export default Card;
