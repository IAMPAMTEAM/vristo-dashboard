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

export default function AccessPolicyAppTable() {
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
            headerName: 'App Policy',
            children: [
                { headerName: 'Jira', field: 'AppJira' },
                { headerName: 'ERP', field: 'AppERP' },
                { headerName: 'Jenkins', field: 'AppJenkins' },
                { headerName: 'Git', field: 'AppGit' },
            ],
        },
        {
            headerName: 'OTP Policy',
            children: [{ headerName: 'Git', field: 'OTPGit' }],
        },
    ]);

    const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy | SizeColumnsToFitProvidedWidthStrategy | SizeColumnsToContentStrategy>(() => {
        return {
            type: 'fitGridWidth',
            columnLimits: [
                {
                    colId: 'PolicyName',
                    minWidth: 270,
                },
                {
                    colId: 'PasswordPolicy',
                    minWidth: 310,
                },
            ],
        };
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        fetch('https://lhh-iampam-demodata.s3.ap-northeast-2.amazonaws.com/accesspolicy-app.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <div style={{ height: 535 }} className={'ag-theme-quartz'}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} autoSizeStrategy={autoSizeStrategy} onGridReady={onGridReady} />
        </div>
    );
}
