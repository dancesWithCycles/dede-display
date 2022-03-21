import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from '../components/lct-msg-table-entry';
import Head from '../components/lct-msg-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function LctMsgTable (props) {
    /*map over msgs array*/
    const getEntries = () => {
        if (props.entries) {
            return props.entries.map((entry, key) => {
                /*the strict equals operator does not converts operants of differnet type*/
                if (entry.teleType === '1') {
                    return <Entry obj={entry} key={key} />;
                }
            });
        }
    };

    /*return a React element*/
    return (
        <>
            {/*size="sm" cuts cell padding in half*/}
            {/*variant="dark" inverts colors*/}
            <Table striped bordered hover size="sm" variant="dark" responsive>
                <thead className="thead-dark">
                    <Head />
                </thead>
                <tbody>{getEntries()}</tbody>
            </Table>
        </>
    );
}

LctMsgTable.propTypes = {
    entries: PropTypes.array
};

export default LctMsgTable;
