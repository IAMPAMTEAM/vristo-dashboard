import React, { useCallback, useMemo, useRef, useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {
    ColDef,
    ColGroupDef,
    GridApi,
    GridOptions,
    GridReadyEvent,
    createGrid,
    SizeColumnsToContentStrategy,
    SizeColumnsToFitGridStrategy,
    SizeColumnsToFitProvidedWidthStrategy,
} from 'ag-grid-community';

export default function AccessPolicyPortalTable() {
    const defaultTableConfig = {
        tableHeight: 535,
        pagination: true,
        paginationPageSize: 10,
        paginationPageSizeSelector: [10, 20, 50, 100],
    };
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
        {
            field: 'PolicyName',
        },
        {
            headerName: 'Infra Policy',
            children: [{ field: 'AWS' }, { field: 'IDC' }, { field: 'Hybrid' }],
        },
        {
            field: 'PasswordPolicy',
        },
        {
            headerName: 'Portal Policy',
            children: [{ field: 'Mgmt' }, { field: 'Diag' }, { field: 'Monitor' }, { field: 'Audit' }, { field: 'Approval' }, { field: 'Admin' }, { field: 'Debug' }],
        },
        {
            headerName: 'OTP Policy',
            children: [{ headerName: 'Portal', field: 'OTPPortal' }],
        },
    ]);

    const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy | SizeColumnsToFitProvidedWidthStrategy | SizeColumnsToContentStrategy>(() => {
        return {
            type: 'fitCellContents',
        };
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/accesspolicy-portal.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <div style={{ height: 535 }} className={'ag-theme-quartz'}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} autoSizeStrategy={autoSizeStrategy} onGridReady={onGridReady} />
        </div>
    );
}
