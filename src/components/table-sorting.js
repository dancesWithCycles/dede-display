import React from 'react';
import PropTypes from 'prop-types';
import { useSortBy, useTable } from 'react-table';

export default function SortedTable ({ columns, data }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable(
        {
            columns,
            data
        },
        useSortBy
    );
    /*pass in the useSortBy hook as one of the arguments of useTable to implemente row sorting*/

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {/*check if react-table is currently sorting the table*/}
                                    {/*// eslint-disable-next-line no-nested-ternary*/}
                                    {/* eslint-disable no-nested-ternary */}
                                    {column.isSorted ?
                                        column.isSortedDesc ?
                                            ' 🔽' :
                                            ' 🔼' :
                                        ''}{' '}
                                </span>
                            </th>
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
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

SortedTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};
