import OnclickGetRowDataTable from '@/components/DataTables/OnclickGetRowDataTable';
import { useCallback, useEffect, useState } from 'react';
import Account from '@/components/Approval/Account';
import Policy from '@/components/Approval/Policy';

interface Row {
  formCategory: 'account' | 'access' | null;
  formType: '';
  formRequestWho: string;
  formRequestWhat: 'new' | 'renewal' | 'update' | 'delete';
  formRequestWhen: string;
  formStatus: 'approved' | 'requested' | 'waiting review' | 'agreed' | 'returned';
  formDueDate: string;
  formProcess: string;
  formNotes: string;
  formAccountUri: string;
  formAccessResourcesUri: string;
}

const WorkflowMain = () => {
  const [tableData, setTableData] = useState([]);
  const [rowData, setRowData] = useState<Row>({
    formCategory: null,
    formType: '',
    formRequestWho: '',
    formRequestWhat: 'new',
    formRequestWhen: '',
    formStatus: 'approved',
    formDueDate: '',
    formProcess: '',
    formNotes: '',
    formAccountUri: '',
    formAccessResourcesUri: '',
  });
  const [formType, setFormType] = useState('');

  // const [onclickRowData, setOnclickRowData] = useState('');

  // const getOnclickRowData = useCallback((d) => {
  //   setRowData(d);
  // }, []);

  // const getOnclickRowData = (d) => {
  //   console.log(d);
  //   // console.log('rowdata', rowData);
  // };

  useEffect(() => {
    fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/workflow-origin.json')
      .then((result) => result.json())
      .then((data) => setTableData(data));

    // console.log(rowData);

    // setFormType(rowData['formType']);
  }, []);

  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          <OnclickGetRowDataTable
            tableData={tableData}
            tableOption={{}}
            getOnclickRowData={(d: any) => {
              setFormType(d['formType']);
              setRowData(d);
            }}
          />
        </div>
      </div>
      <div className='pt-6'>
        {/* <p>{rowData['formType']}</p> */}
        {rowData['formCategory'] === null ? <div></div> : rowData['formCategory'] === 'account' ? <Account /> : rowData['formCategory'] === 'access' ? <Policy formType={formType} /> : ''}
      </div>
    </div>
  );
};

export default WorkflowMain;
