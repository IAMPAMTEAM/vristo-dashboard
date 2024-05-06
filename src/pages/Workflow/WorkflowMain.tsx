import OnclickGetRowDataTable from '@/components/DataTables/OnclickGetRowDataTable';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    // TODO: s3 update
    fetch('https://sy-workflow-demodata.s3.us-west-2.amazonaws.com/workflow-origin.json')
      .then((result) => result.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div>
      <div className='grid gap-6'>
        <div className='panel'>
          <OnclickGetRowDataTable
            getOnclickRowData={(d) => {
              setRowData(d);
            }}
            tableData={tableData}
            tableOption={{}}
          />
        </div>
      </div>
      <div className='pt-6'>
        {rowData['formCategory'] === null ? '' : rowData['formCategory'] === 'account' ? <Account /> : rowData['formCategory'] === 'access' ? <Policy accessResource={rowData} /> : ''}
      </div>
    </div>
  );
};

export default WorkflowMain;
