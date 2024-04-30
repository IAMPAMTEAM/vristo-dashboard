import React, { useCallback, useMemo, useRef, useState, StrictMode } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef, ColGroupDef, GridApi, GridOptions, GridReadyEvent, createGrid } from 'ag-grid-community';
import 'ag-grid-charts-enterprise';

export default function RowGroupDataTable() {
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: 'GroupName', rowGroup: true, hide: true },
        { field: 'GroupId' },
        { field: 'Direction', rowGroup: true, hide: true },
        { field: 'ProtocolType' },
        { field: 'Protocol' },
        { field: 'PortRange' },
        { field: 'SrcDst' },
        { field: 'Description' },
        { field: 'AssociateEC2' },
        { field: 'AssociateRDS' },
        { field: 'AssociateELB' },
        { field: 'SGType' },
        { field: 'RuleManager' },
        { field: 'RuleType' },
        { field: 'Comment' },
        { field: 'DueDate' },
        { field: 'RuleUsageCheck' },
        { field: 'CheckDate' },
        { field: 'id' },
    ]);
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            flex: 1,
            minWidth: 100,
        };
    }, []);
    const autoGroupColumnDef = useMemo<ColDef>(() => {
        return {
            minWidth: 200,
        };
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        fetch('http://localhost:3001/networkpolicy-aws-sg')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <div className={'ag-theme-quartz'} style={{ height: 535 }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef} autoGroupColumnDef={autoGroupColumnDef} onGridReady={onGridReady} />
        </div>
    );
}
