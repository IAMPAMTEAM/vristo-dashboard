import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

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

    return (
        <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef} />
        </div>
    );
}
