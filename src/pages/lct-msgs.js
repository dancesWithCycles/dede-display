import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MsgsTableEntry from '../components/msgs-table-entry';
import MsgsTableHead from '../components/msgs-table-head';

const LctMsgs = () => {
    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [msgs, setMsgs] = useState([]);

    /*fetch msgs in a JavaScript function*/
    const getMsgs = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const msgs = await axios.get('https://dede-display.vbn.de:42001/ivu-loc');
            /*set state*/
            setMsgs(msgs.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getMsgs();

        /*update msgs periodically*/
        const interval = setInterval(() => {
            getMsgs();
        }, 1000);

        /*clear interval when the user navigates to another page*/
        return () => clearInterval(interval);

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*map over msgs array*/
    const msgsTable = () => {
        return msgs.map((msg, key) => {
            return <MsgsTableEntry obj={msg} key={key} />;
        });
    };

    return (
        <>
            <table className="table table-striped table-dark">
                <thead className="thead-dark">
                    <MsgsTableHead />
                </thead>
                <tbody>{msgsTable()}</tbody>
            </table>
        </>
    );
};
export default LctMsgs;
