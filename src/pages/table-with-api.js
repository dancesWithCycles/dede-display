import React, { useEffect, useState } from 'react';
import PaginationTable from '../components/table-pagination';
import axios from 'axios';

export default function TableWithAPI () {
    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [msgs, setMsgs] = useState([]);

    var data = React.useMemo(() => {
    //console.log('cells: ' + cells.length);
    //return cells;
        console.log('msgs: ' + msgs.length);

        return msgs;
    }, []);

    const update = () => {
        data = React.useMemo(() => {
            //console.log('cells: ' + cells.length);
            //return cells;
            console.log('msgs: ' + msgs.length);

            return msgs;
        }, []);
    };

    /*fetch msgs in a JavaScript function*/
    const getMsgs = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const resp = await axios.get('https://dede-display.vbn.de:42001/ivu-loc');

            /*set state*/
            setMsgs(resp.data);
            console.log('resp.data: ' + resp.data[0].time);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    //const [cells, setCells] = useState([]);

    /*
    const getData = async () => {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot');
        const data = await resp.json();
        console.log('data: ' + data[0].title);
        //console.log('resp: ' + resp.data[0].title);
        //setCells(data);
        setCells(resp);
    };
*/
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'title' // accessor is the "key" in the data
            },
            {
                Header: 'description',
                accessor: 'description'
            },
            {
                Header: 'Ingredients',
                accessor: 'ingredients'
            }
        ],
        []
    );

    useEffect(() => {
    //getData();
        getMsgs();

        update();

        /*update msgs periodically*/
        const interval = setInterval(() => {
            //getData();
            getMsgs();

            update();
        }, 3000);

        /*clear interval when the user navigates to another page*/
        return () => clearInterval(interval);

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    return (
        <>
            {/*cells && <PaginationTable columns={columns} data={data} />*/}
            {<PaginationTable columns={columns} data={data} />}
        </>
    );
}
