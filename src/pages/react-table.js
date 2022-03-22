import React from 'react';
import { useTable } from 'react-table';

function ReactTable () {
    const data = React.useMemo(
        () => [
            {
                date: '2022-03-21',

                time: '11:11:11'
            },

            {
                date: '2022-03-21',

                time: '12:12:12'
            },

            {
                date: '2022-03-21',

                time: '13:13:13'
            }
        ],

        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',

                accessor: 'date' // accessor is the "key" in the data
            },

            {
                Header: 'Time',

                accessor: 'time'
            }
        ],

        []
    );

    /*create table instance by calling useTable*/
    /*to use this hook, pass it with an options object with at least a columns and data value, followed by any hooks you want to use*/
    const {
        getTableProps,

        getTableBodyProps,

        headerGroups,

        rows,

        prepareRow
    } = useTable({ columns, data });

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',

                                    background: 'aliceblue',

                                    color: 'black',

                                    fontWeight: 'bold'
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);

                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',

                                            border: 'solid 1px gray',

                                            background: 'papayawhip'
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ReactTable;
