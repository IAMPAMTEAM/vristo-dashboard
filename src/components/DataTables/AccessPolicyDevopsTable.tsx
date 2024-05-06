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
                { headerName: 'Mgmt', field: 'Management', cellRendererParams: { disabled: true } },
                { field: 'Diag', cellRendererParams: { disabled: true } },
                { headerName: 'Monitor', field: 'Monitoring', cellRendererParams: { disabled: true } },
                { field: 'Audit', cellRendererParams: { disabled: true } },
                { field: 'Approval', cellRendererParams: { disabled: true } },
                { field: 'Admin', cellRendererParams: { disabled: true } },
                { field: 'Debug', cellRendererParams: { disabled: true } },
            ],
        },
        {
            headerName: 'Access Privilage',
            children: [
                { field: 'Server', cellRendererParams: { disabled: true } },
                { field: 'DB', cellRendererParams: { disabled: true } },
                { field: 'VPN', cellRendererParams: { disabled: true } },
                { field: 'Network', cellRendererParams: { disabled: true } },
                { headerName: 'AWS-IAM', field: 'AWSIAM', cellRendererParams: { disabled: true } },
                { headerName: 'AWS EC2 Key', field: 'AWSEC2Key', cellRendererParams: { disabled: true } },
                { headerName: 'AWS IAM/S3 Key', field: 'AWSIAMS3Key', cellRendererParams: { disabled: true } },
                { headerName: 'LotteDFS SVN', field: 'LotteDFSSVN', cellRendererParams: { disabled: true } },
                { headerName: 'LotteDFS VDI', field: 'LotteDFSVDI', cellRendererParams: { disabled: true } },
                { headerName: 'LotteDFS JIRA', field: 'LotteDFSJIRA', cellRendererParams: { disabled: true } },
            ],
        },
        {
            headerName: 'OTP Policy',
            children: [{ field: 'OTPServer' }, { field: 'OTPDB' }, { field: 'OTPVPN' }, { field: 'OTPPortal' }],
        },
    ]);

    const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy | SizeColumnsToFitProvidedWidthStrategy | SizeColumnsToContentStrategy>(() => {
        return {
            type: 'fitCellContents',
        };
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/accesspolicy-devops.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <div style={{ height: 535 }} className={'ag-theme-quartz'}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} autoSizeStrategy={autoSizeStrategy} onGridReady={onGridReady} />
        </div>
    );
}
