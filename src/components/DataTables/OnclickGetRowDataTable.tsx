import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridApi, SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function OnclickGetRowDataTable({ getOnclickRowData, tableData, tableOption }) {
    const defaultTableConfig = {
        tableHeight: 535,
        pagination: true,
        paginationPageSize: 10,
        paginationPageSizeSelector: [10, 20, 50, 100],
    };

    const gridRef = useRef<AgGridReact>(null);
    const gridApi = useRef<GridApi>();
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([]);
    const [tableConfig, setTableConfig] = useState(defaultTableConfig);

    useEffect(() => {
        if (Array.isArray(tableData) && tableData.length > 0 && typeof tableData[0] === 'object' && tableData[0] !== null) {
            const keys = Object.keys(tableData[0]);
            const columns = keys
                .map((key) => {
                    if (key === 'formCategory') {
                        return {
                            field: key,
                            cellStyle: (params) => {
                                if (params.value === 'account') {
                                    return { backgroundColor: '#d0f4de' };
                                } else {
                                    return { backgroundColor: '#bde0fe' };
                                }
                            },
                        };
                    } else if (key === 'formType') {
                        return {
                            field: key,
                            cellStyle: (params) => {
                                if (params.value === 'aws') {
                                    return { backgroundColor: '#fcf6bd' };
                                } else if (params.value === 'server') {
                                    return { backgroundColor: '#fde4cf' };
                                } else if (params.value === 'db') {
                                    return { backgroundColor: '#ffcfd2' };
                                } else if (params.value === 'vpn') {
                                    return { backgroundColor: '#cfbaf0' };
                                } else if (params.value === 'portal') {
                                    return { backgroundColor: '#8eecf5' };
                                } else if (params.value === 'app') {
                                    return { backgroundColor: '#98f5e1' };
                                } else if (params.value === 'saas') {
                                    return { backgroundColor: '#b9fbc0' };
                                } else {
                                    return { backgroundColor: '#a3c4f3' };
                                }
                            },
                        };
                    } else if (key === 'formRequestWhat') {
                        return {
                            field: key,
                            cellStyle: (params) => {
                                if (params.value === 'new') {
                                    return { backgroundColor: '#7ae582' };
                                } else if (params.value === 'renewal') {
                                    return { backgroundColor: '#bee1e6' };
                                } else if (params.value === 'update') {
                                    return { backgroundColor: '#70d6ff' };
                                } else {
                                    return { backgroundColor: '#fad2e1' };
                                }
                            },
                        };
                    } else if (key === 'formStatus') {
                        return {
                            field: key,
                            cellStyle: (params) => {
                                if (params.value === 'approved') {
                                    return { backgroundColor: '#fbf8cc' };
                                } else if (params.value === 'agreed') {
                                    return { backgroundColor: '#fde4cf' };
                                } else if (params.value === 'deleted') {
                                    return { backgroundColor: '#f1c0e8' };
                                } else if (params.value === 'requested') {
                                    return { backgroundColor: '#cfbaf0' };
                                } else if (params.value === 'returned') {
                                    return { backgroundColor: '#a3c4f3' };
                                } else if (params.value === 'waiting agree') {
                                    return { backgroundColor: '#90dbf4' };
                                } else if (params.value === 'waiting approval') {
                                    return { backgroundColor: '#98f5e1' };
                                } else {
                                    return { backgroundColor: '#b9fbc0' };
                                }
                            },
                        };
                    } else if (key === 'formProcess' || key === 'formNotes' || key === 'formAccountUri' || key === 'formAccessResourcesUri') {
                        return null;
                    } else {
                        return { field: key };
                    }
                })
                .filter(Boolean);
            setColumnDefs(columns);
            setRowData(tableData);
        }
        setTableConfig({ ...defaultTableConfig, ...tableOption });

        if (gridRef.current && gridRef.current.api) {
            setTimeout(() => {
                const currentGridRef = gridRef.current as AgGridReact<HTMLElement>;

                currentGridRef.api.sizeColumnsToFit({ defaultMinWidth: 150 });
            });
        }
    }, [tableData, tableOption]);

    const defaultColDef = useMemo(
        () => ({
            filter: true,
        }),
        []
    );

    const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy | SizeColumnsToFitProvidedWidthStrategy | SizeColumnsToContentStrategy>(() => {
        return {
            type: 'fitGridWidth',
        };
    }, []);

    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current!.api.getSelectedRows();
        getOnclickRowData(selectedRows[0]);
        // console.log(selectedRows[0]);
    }, []);

    return (
        <div className="ag-theme-alpine" style={{ height: tableConfig.tableHeight }}>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                autoSizeStrategy={autoSizeStrategy}
                pagination={tableConfig.pagination}
                paginationPageSize={tableConfig.paginationPageSize}
                paginationPageSizeSelector={tableConfig.paginationPageSizeSelector}
                onSelectionChanged={onSelectionChanged}
                rowSelection={'single'}
            />
        </div>
    );
}
