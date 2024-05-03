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

export default function AccessPolicyDevopsTable() {
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
            children: [
                { headerName: 'Mgmt', field: 'Management' },
                { field: 'Diag' },
                { headerName: 'Monitor', field: 'Monitoring' },
                { field: 'Audit' },
                { field: 'Approval' },
                { field: 'Admin' },
                { field: 'Debug' },
            ],
        },
        {
            headerName: 'Access Privilage',
            children: [
                { field: 'Server' },
                { field: 'DB' },
                { field: 'VPN' },
                { field: 'Network' },
                { field: 'AWS-IAM' },
                { headerName: 'AWS IAM', field: 'AWS-IAM' },
                { headerName: 'AWS EC2 Key', field: 'AWS-EC2Key' },
                { headerName: 'AWS IAM/S3 Key', field: 'AWS-IAMS3Key' },
                { headerName: 'LotteDFS SVN', field: 'LotteDFS-SVN' },
                { headerName: 'LotteDFS VDI', field: 'LotteDFS-VDI' },
                { headerName: 'LotteDFS JIRA', field: 'LotteDFS-JIRA' },
            ],
        },
        {
            headerName: 'OTP Policy',
            children: [{ field: 'Server' }, { field: 'DB' }, { field: 'VPN' }, { field: 'Portal' }],
        },
    ]);

    const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy | SizeColumnsToFitProvidedWidthStrategy | SizeColumnsToContentStrategy>(() => {
        return {
            type: 'fitCellContents',
        };
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <div style={{ height: 535 }} className={'ag-theme-quartz'}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} autoSizeStrategy={autoSizeStrategy} onGridReady={onGridReady} />
        </div>
    );
}
