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
            children: [
                { field: 'AWS', maxWidth: 70 },
                { field: 'IDC', maxWidth: 60 },
                { field: 'Hybrid', maxWidth: 80 },
            ],
        },
        {
            field: 'PasswordPolicy',
        },
        {
            headerName: 'Portal Policy',
            children: [
                { headerName: 'Mgmt', field: 'Management', maxWidth: 80 },
                { field: 'Diag', maxWidth: 70 },
                { headerName: 'Monitor', field: 'Monitoring', maxWidth: 90 },
                { field: 'Audit', maxWidth: 70 },
                { field: 'Approval', maxWidth: 100 },
                { field: 'Admin', maxWidth: 80 },
                { field: 'Debug', maxWidth: 80 },
            ],
        },
        {
            headerName: 'Access Privilage',
            children: [
                { field: 'Server', maxWidth: 80 },
                { field: 'DB', maxWidth: 60 },
                { field: 'VPN', maxWidth: 70 },
                { field: 'Network', maxWidth: 90 },
                { headerName: 'AWS-IAM', field: 'AWSIAM', maxWidth: 100 },
                { headerName: 'AWS EC2 Key', field: 'AWSEC2Key', maxWidth: 130 },
                { headerName: 'AWS IAM/S3 Key', field: 'AWSIAMS3Key', maxWidth: 150 },
                { headerName: 'LotteDFS SVN', field: 'LotteDFSSVN', maxWidth: 130 },
                { headerName: 'LotteDFS VDI', field: 'LotteDFSVDI', maxWidth: 130 },
                { headerName: 'LotteDFS JIRA', field: 'LotteDFSJIRA', maxWidth: 130 },
            ],
        },
        {
            headerName: 'OTP Policy',
            children: [
                { field: 'OTPServer', maxWidth: 110 },
                { field: 'OTPDB', maxWidth: 90 },
                { field: 'OTPVPN', maxWidth: 110 },
                { field: 'OTPPortal', maxWidth: 110 },
            ],
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
