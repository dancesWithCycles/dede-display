import React from 'react';
import PropTypes from 'prop-types';
import PaginationTable from './table-pagination';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function LctMsgTable (props) {
    const entriesLength = () => {
        console.log('entries: ' + props.entries.length);
        if (props.entries) {
            return props.entries.length;
        }
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'date',
                accessor: 'date' // accessor is the "key" in the data
            },
            {
                Header: 'time',
                accessor: 'time'
            }
        ],
        []
    );

    const data = React.useMemo(() => {
        console.log('entries: ' + props.entries.length);
        return props.entries;
    }, []);

    return (
        <>
            <p>Hello world!</p>
            <p>Entries length: {entriesLength()}</p>
            {props.entries && <PaginationTable columns={columns} data={data} />}
        </>
    );
}

LctMsgTable.propTypes = {
    entries: PropTypes.array
};

export default LctMsgTable;
