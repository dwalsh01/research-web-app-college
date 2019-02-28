import React from 'react';
import MaterialTable from 'material-table';

// columns = [], data = [], title = ''
export default function ProposalsTable(props) {
  return (
    <div>
      <MaterialTable {...props} />
    </div>
  );
}
