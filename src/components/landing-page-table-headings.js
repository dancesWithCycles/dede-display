/*create headings*/
const headings = [
    {
        Header: 'Datum',
        accessor: 'date' // accessor is the "key" in the data
    },
    {
        Header: 'Uhrzeit',
        accessor: 'time'
    },
    {
        Header: 'Adresse A',
        accessor: 'addressPartA'
    },
    {
        Header: 'Adresse B',
        accessor: 'addressPartB'
    },
    {
        Header: 'Sender Id',
        accessor: 'senderId'
    },
    {
        Header: 'Receiver Typ',
        accessor: 'receiverType'
    },
    {
        Header: 'Telegramm Typ',
        accessor: 'teleType'
    },
    {
        Header: 'Telegramm Version',
        accessor: 'teleVersion'
    },
    {
        Header: 'Telegramm Id',
        accessor: 'teleId'
    },
    {
        Header: 'Netzpunkt',
        accessor: 'netPoint'
    },
    {
        Header: '[m] nach Netzpunkt',
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
];

export default headings;
