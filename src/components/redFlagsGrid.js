import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const RedFlagsGrid = ({red_flags_data}) => {

    return (
        <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
                rowData={red_flags_data}>
                <AgGridColumn field="date" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="eez_crossing" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="flag" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="mmsi" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="violation" sortable={ true } filter={ true }></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default RedFlagsGrid
