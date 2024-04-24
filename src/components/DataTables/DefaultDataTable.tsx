import { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function DefaultDataTable({ tableData }) {
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([]);

    useEffect(() => {
        if (Array.isArray(tableData) && tableData.length > 0 && typeof tableData[0] === 'object' && tableData[0] !== null) {
            const keys = Object.keys(tableData[0]);
            const columns = keys.map((key) => ({ field: key }));
            setColumnDefs(columns);
            setRowData(tableData);
        }
    }, [tableData]);

    const defaultColDef = useMemo(
        () => ({
            filter: true,
        }),
        []
    );

    const pagination = true;
    const paginationPageSize = 10;
    const paginationPageSizeSelector = [10, 20, 50, 100];

    return (
        <div className="ag-theme-alpine" style={{ height: 535 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                paginationPageSizeSelector={paginationPageSizeSelector}
            />
        </div>
    );
}
