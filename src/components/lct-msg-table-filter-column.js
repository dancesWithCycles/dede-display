import React from 'react';
import PropTypes from 'prop-types';
import BasicTable from './table-filter-column';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function LctMsgTable (props) {
    /*create headings*/
    /*useMemo tells React that data isn't being recreated on every render*/
    const columns = React.useMemo(
        () => [
            {
                Header: 'date',
                accessor: 'date' // accessor is the "key" in the data
            },
            {
                Header: 'time',
                accessor: 'time'
            },
            {
                Header: 'Telegramm Version',
                accessor: 'teleVersion'
            },
            {
                Header: 'Netzpunkt',
                accessor: 'netPoint'
            },
            {
                Header: 'Position [m] nach Netzpunkt',
                accessor: 'relPosition'
            },
            {
                Header: 'Längengrad',
                accessor: 'longitude'
            },
            {
                Header: 'Breitengrad',
                accessor: 'latitude'
            },
            {
                Header: 'Umlauf Nummer',
                accessor: 'blockNo'
            },
            {
                Header: 'Linien Nummer',
                accessor: 'lineNo'
            },
            {
                Header: 'Fahrt Nummer',
                accessor: 'tripNo'
            },
            {
                Header: 'Fahrweg Nummer',
                accessor: 'routeNo'
            },
            {
                Header: 'Fahrplan Abweichung [s]',
                accessor: 'deviation'
            }
        ],
        []
    );

    /*create data*/
    /*updating hooks is done by the dependency array*/
    /*define variables that 'trigger' the change on hooks*/
    const data = React.useMemo(() => props.entries, [props.entries]);

    return <>{props.entries && <BasicTable columns={columns} data={data} />}</>;
}

LctMsgTable.propTypes = {
    entries: PropTypes.array
};

export default LctMsgTable;
