import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalFilter, useTable } from 'react-table';
import GlobalFilter from './filter-global';

/*load data set through these props*/
export default function FilterTable ({ columns, data }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // send props to table
        getTableBodyProps, // send props to table body
        headerGroups, // returns normalized header groups
        prepareRow, // Prepare the row in order to be displayed (this function needs to be called for each row before getting the row props)
        rows, // rows for the table based on the data passed
        state, //table state
        setGlobalFilter //applies global filtering to the table.
    } = useTable(
        {
            columns,
            data
        },
        useGlobalFilter
    );
    const { globalFilter } = state;

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

FilterTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};
